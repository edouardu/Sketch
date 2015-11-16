# Generate ICNS
Sketch.app plugin for generating an Apple Icon Image `.icns` from a sequence of artboards OR automatically from a single layer. Includes standard OS X icon sizes and `@2x` versions for high-density displays. Works with sandboxed ( App Store ) and standard application environments.

## Installation
1. Download and open `Generate-ICNS-master.zip`
2. Navigate the Sketch menu bar to `Plugins ▸ Reveal Plugins Folder...`
3. Place the `Generate ICNS` folder into the revealed plugins directory
4. That's it...

## Generate Automatically
1. Design your icon on a single `1024x1024` sized artboard
2. Navigate the menu bar and select `Plugins ▸ Generate ICNS ▸ Automatically`
3. The `Icon.icns` will export to the same directory as your `.sketch` document
4. That's it...

**Sizes Generated**  
`16x16, 32x32, 128x128, 256x256, 512x512`  
`16x16@2x, 32x32@2x, 128x128@2x, 256x256@2x, 512x512@2x`

**Keyboard Shorcut**  
`Shift` + `Command` + `A`

**Usage Notes**  
The auto generator will scale-up artboards smaller than `1024x1024` to fulfill the maximum icon size of `512x512@2x`. Be sure to use `1024x1024` for the artboard size, otherwise the hi-res icons will appear blurry. A specific naming structure is not required...name the artboard however you decide.

## Generate From Artboards
1. Start by navigating to `File ▸ New From Template ▸ Mac App Icon`
2. Use the provided dimensions as guidance when designing the icon
3. Navigate the menu bar and select `Plugins ▸ Generate ICNS ▸ From Artboards`
4. The `Icon.icns` will export to the same directory as your `.sketch` document

**Keyboard Shorcut**  
`Option` + `Shift` + `Command` + `A`

**Usage Notes**  
The artboard naming structure, for example: `icon_32x32` and `icon_32x32@2x`, must remain intact for the generator to work properly. You can prevent individual artboards from exporting by appending `Lock` to the name.

## Release Notes
**Generate ICNS 1.0**   
– Initial Release   
**Generate ICNS 1.0.1**   
– Removed the installer app, allowing users to install manually   
**Generate ICNS 1.0.2**  
– Rewrote the plugins using `NSTask` for handling commands  
– JSTalk `GTMScriptRunner.jstplugin` is no longer required for the plugins to work  
– Updated instructions for installing  
**Generate ICNS 1.0.3**      
– Fixed an issue with missing sizes when using the automatic generator    
– Minor changes to the code structure  
– Plugins are now hosted at [GitHub.com/NathanRutzky](http://github.com/NathanRutzky)  
**Generate ICNS 1.0.4**      
– Bad Release  
**Generate ICNS 1.0.5**      
– Fixed an issue with sandboxing ( App Store ) directory permissions  
– Organization and code cleanup

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [mail@nath.co](mailto:mail@nath.co) or find me on twitter [@NathanRutzky](http://twitter.com/NathanRutzky).