

// save stylesheet to layer metadata
var saveStylesToLayers = function(styles){
  flushLayerStylesRecursively(page);
  for (var selector in styles) {
    saveAStyleToLayersRecursively(selector,styles[selector],page);
  }
}

//read styles from layer metadata
var styleTreeFromLayers = function(){
  var styleTree = stylesForAllLayers(page);
  return styleTree;
}

//collect all the measures from layers
var collectMeasures = function(styleTree, computedStyleTree){
  var measuredStyleTree = collectMeasuresRecursively(page, styleTree, computedStyleTree, false);
  return measuredStyleTree;
}

// compute layout given the metadata style tree
var computeStyles = function(styleTree){
  //load css-layout
  var jsContext = [[JSContext alloc] init];
  var layoutLib = utils.js.loadLibrary("lib/css-layout/Layout.js");
  [jsContext evaluateScript:layoutLib];
  var layoutHelper = utils.js.loadLibrary("layout.JSLayoutHelper.js");
  [jsContext evaluateScript:layoutHelper];
  var computeLayout = jsContext[@"provideComputedLayout"];

  //stringify the layer tree
  var stringifiedStyles = stringifyStyleTree(styleTree);

  //compute styles
  var layoutArguments = NSArray.arrayWithObjects(stringifiedStyles);
  var computedStyles = [computeLayout callWithArguments:layoutArguments];

  //in case something goes to hell - todo - throw an alert if not empty
  if ([jsContext exception]) {
    utils.UI.showError("CSS Layout: " + [jsContext exception]);
  };
  return [computedStyles toDictionary];
}

// lay out all the layers given computed styles
var layoutElements = function(computedTree){
  layoutLayersRecursively(computedTree, 0,0, page, false);
  doc.currentView().refresh();
}

// traverse all of the layers and lay out the elements
var layoutLayersRecursively = function(layerTree, currentX, currentY, currentLayer, layoutChildrenFlag)
{
  var shouldLayoutChildren = layoutChildrenFlag;
  // check if the item has a style attribute and if yes, turn the flag on
  // to lay out itself and all of it's children. This is to only start laying out
  // from the topmost item in the hierarchy that has a style attribute.
  if ([pluginCommand valueForKey:"style" onLayer:currentLayer]) {
    shouldLayoutChildren = true;
  }
  //ignore top page and stylesheet layer
  //todo - handle artboards better
  if (shouldLayoutChildren && !shouldIgnoreLayer(currentLayer)) {

    // 0 gets undefined when it's passed as a parameter *gosh*
    if (!currentY) { currentY = 0; };
    if (!currentX) { currentX = 0; };

    var relativeY = currentY + layerTree["top"];
    var relativeX = currentX + layerTree["left"];

    var positionRect = currentLayer.rect();
    positionRect.origin.x = relativeX;
    positionRect.origin.y = relativeY;
    currentLayer.setRect(positionRect);

    // don't set size on groups, it resizes based on children and would fuck things up
    if (!utils.is.group(currentLayer)) {
      var sizeRect = [currentLayer rect];
      sizeRect.size.width = layerTree["width"];
      sizeRect.size.height = layerTree["height"];
      [currentLayer setRect:sizeRect];
    }
  }

  // iterate over children recursively if we can
  if (utils.is.group(currentLayer)){
    var childLayers = [currentLayer layers].array();
    var childStyleTree = layerTree["children"];
    var parentX = currentLayer.frame.x;
    var parentY = currentLayer.frame.y;
    if (childLayers){
      for (var i=0; i < [childLayers count]; i++){
        var childLayer = childLayers[i];

        // special case for group background to stretch to parent group size
        if (childLayer.name() == backgroundLayerName) {
          var childRect = [childLayer rect];
          childRect.origin.y = 0;
          childRect.origin.x = 0;
          childRect.size.width = layerTree["width"];
          childRect.size.height = layerTree["height"];
          [childLayer setRect:childRect];
        }
        layoutLayersRecursively(childStyleTree[i], parentX, parentY, childLayer, shouldLayoutChildren);
      }
      // make sure group's bounds are re-set
      [currentLayer resizeRoot:true];
    }
  }
}

// recursively iterate through all layers, find text layers within elements that
// should be laid out, measure their height based on the computed tree
// and add it back to the style tree
var collectMeasuresRecursively = function(currentLayer, styleTree, computedStyleTree, shouldCollectMeasures){
  // only collect measures if it's a descendant of a styled element
  if ([pluginCommand valueForKey:"style" onLayer:currentLayer]) {
    shouldCollectMeasures = true;
  }
  //collect measures if it's a text layer
  if (shouldCollectMeasures && utils.is.textLayer(currentLayer)) {
    // parent elements have width and text should behave appropriately
    if (computedStyleTree["width"] > 0) {
      [currentLayer setTextBehaviour:1] // BCTextBehaviourFixedWidth
      var currentRect = [currentLayer rect];
      currentRect.size.width = computedStyleTree["width"];
      [currentLayer setRect:currentRect];
      [currentLayer adjustFrameToFit];
    // parent elements have no width, they should behave according to the text layer
    } else {
      styleTree["computedWidth"] = currentLayer.rect().size.width;
    }

    styleTree["computedHeight"] = currentLayer.rect().size.height;
  }

  // iterate over children recursively if we can
  if (utils.is.group(currentLayer)){
    var childLayers = [currentLayer layers].array();
    var childStyleTree = styleTree["children"];
    var childComputedTree = computedStyleTree["children"];
    if (childLayers){
      for (var i=0; i < [childLayers count]; i++){
        var childLayer = childLayers[i];
        styleTree["children"][i] = collectMeasuresRecursively(childLayer, childStyleTree[i], childComputedTree[i], shouldCollectMeasures);
      }
    }
  }
  return styleTree;
}

// ----------------- helpers ---------------- //

// takes a selector, traverses the layer to see if there's one with that name
// and saves a corresponding style to the layer metadata
var saveAStyleToLayersRecursively = function(selector, style, layer){

  //save styles to layers with classes, ignore stylesheet layer and the parent page
  //for the future - ignore prototype layers maybe?
  if (layer.name() != styleSheetLayerName && layer.class() != "MSPage"){
    if (utils.common.endsWithString(layer.name(), selector)) {
      [pluginCommand setValue:style.attributes forKey:"style" onLayer:layer];
    }
  }

  // iterate over children recursively if we can
  if (utils.is.group(layer)){
    var childLayers = [layer layers].array();
    if (childLayers){
      var loop = [childLayers objectEnumerator];
       while (item = [loop nextObject]) {
         saveAStyleToLayersRecursively(selector, style, item);
      }
    }
  }
}

var flushLayerStylesRecursively = function(layer){
  [pluginCommand setValue:nil forKey:"style" onLayer:layer];
  [pluginCommand setValue:nil forKey:"computedWidth" onLayer:layer];
  [pluginCommand setValue:nil forKey:"computedHeight" onLayer:layer];

  // iterate over children recursively if we can
  if (utils.is.group(layer)){
    var childLayers = [layer layers].array();
    if (childLayers){
      var loop = [childLayers objectEnumerator];
       while (item = [loop nextObject]) {
         flushLayerStylesRecursively(item);
      }
    }
  }
}

// get the whole tree of layers with styles saved in the layer metadata
var stylesForAllLayers = function(layer){
  var layerInfo = {};
  if (layer.name() != styleSheetLayerName){
    layerInfo["name"] = layer.name(); //todo - find a way to represent layer better (uuid that gets stored maybe?)
    var layerStyle = [pluginCommand valueForKey:"style" onLayer:layer];
    if (layerStyle) {
      layerInfo["style"] = layerStyle;
    }

    //add position absolute to style layers and backgrounds so their sizes are not computed
    if ([[layer name] hasPrefix:"@"] || [layer name] == backgroundLayerName){
      layerStyle = {};
      layerStyle["position"] = "absolute";
      layerInfo["style"] = layerStyle;
    }
  }

  // iterate over children recursively if we can
  if (utils.is.group(layer)){
    var childLayers = [layer layers].array();
    if (childLayers){
      var childrenArray = [];
      var loop = [childLayers objectEnumerator];
      while (item = [loop nextObject]) {
         var childLayerInfo = stylesForAllLayers(item);
         //todo - in case stylesheet is somewhere deep we should remove this
         childrenArray.push(childLayerInfo);
      }
      layerInfo["children"] = childrenArray;
    }
  }
  return layerInfo;
}

// takes an obj-c dictionary of all layers, together with styles
// returns string to pass along to layout helper
var stringifyStyleTree = function(styleTree){
  // first converst the tree to stringified JSON
  var JSONData = [NSJSONSerialization dataWithJSONObject:styleTree options:0 error:nil];
  var JSONString = [[NSString alloc] initWithData:JSONData encoding:NSUTF8StringEncoding];
  return JSONString; // JSValue to pass along to the css-layout library;
}

// check whether a layer should be ignored when being laid out
var shouldIgnoreLayer = function(currentLayer){
  if ([currentLayer class] == "MSPage") {
    return true;
  }
  if (currentLayer.name() == styleSheetLayerName) {
    return true;
  }
  if (currentLayer.name() == backgroundLayerName) {
    return true;
  }
  if ([[currentLayer name] hasPrefix:"@"]) {
    return true;
  }
  return false;
}
