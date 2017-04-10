var init_pantone_fashion_home_interiors_paper_new = function(title) {
    var colors = [
        ["11-4001 TPG", "EFF0F1"],
        ["11-4801 TPG", "EAE6DA"],
        ["11-0607 TPG", "F3EFE7"],
        ["11-0608 TPG", "F0EDE5"],
        ["11-4302 TPG", "F2F0E3"],
        ["11-1302 TPG", "F1E9E0"],
        ["11-0110 TPG", "F0E3CE"],
        ["11-0106 TPG", "F2EDD7"],
        ["11-0515 TPG", "F4EBC8"],
        ["13-0919 TPG", "D7C49E"],
        ["13-1105 TPG", "C8BCA4"],
        ["14-1208 TPG", "C2AD92"],
        ["12-4301 TPG", "D9D0BE"],
        ["12-0110 TPG", "DAD1BB"],
        ["11-0623 TPG", "EFEC9C"],
        ["12-0742 TPG", "F6EA7B"],
        ["12-0646 TPG", "F0E366"],
        ["13-0646 TPG", "ECDB54"],
        ["13-0644 TPG", "F7E14A"],
        ["13-0849 TPG", "FFD653"],
        ["13-0851 TPG", "FFD763"],
        ["14-0952 TPG", "DBAE49"],
        ["17-0949 TPG", "B9893D"],
        ["15-0960 TPG", "DAA03D"],
        ["15-1051 TPG", "D79232"],
        ["15-1045 TPG", "DB9332"],
        ["18-1049 TPG", "AF6F34"],
        ["18-1050 TPG", "B36E36"],
        ["13-0946 TPG", "E8AA54"],
        ["14-1052 TPG", "FCAF5A"],
        ["15-1151 TPG", "F59D4D"],
        ["15-1262 TPG", "FF8B27"],
        ["15-1264 TPG", "FF842A"],
        ["15-1335 TPG", "FF7F28"],
        ["17-1145 TPG", "C86C32"],
        ["15-1040 TPG", "B69573"],
        ["17-1142 TPG", "91624D"],
        ["16-1438 TPG", "A9754F"],
        ["17-1052 TPG", "99623A"],
        ["18-1155 TPG", "935D3B"],
        ["16-1347 TPG", "C77748"],
        ["16-1348 TPG", "C6784C"],
        ["13-1308 TPG", "DDCCB7"],
        ["15-1020 TPG", "C1A68B"],
        ["14-1315 TPG", "D2B296"],
        ["15-1125 TPG", "D0A783"],
        ["15-1425 TPG", "C4936F"],
        ["15-1430 TPG", "C08E68"],
        ["18-1028 TPG", "6C4F3D"],
        ["16-1358 TPG", "FD7133"],
        ["15-1243 TPG", "FFA269"],
        ["14-1241 TPG", "FAAC7E"],
        ["13-1125 TPG", "F5B995"],
        ["17-1361 TPG", "F7613A"],
        ["16-1460 TPG", "FB6D44"],
        ["16-1453 TPG", "FB6E45"],
        ["16-1345 TPG", "D6866A"],
        ["15-1429 TPG", "D07B61"],
        ["17-1345 TPG", "BE624C"],
        ["15-1520 TPG", "EC9787"],
        ["16-1548 TPG", "F77D73"],
        ["16-1545 TPG", "F7796D"],
        ["17-1450 TPG", "C25448"],
        ["19-1224 TPG", "665149"],
        ["19-1233 TPG", "6C5046"],
        ["19-1234 TPG", "624A44"],
        ["19-1432 TPG", "604944"],
        ["18-1541 TPG", "78463E"],
        ["19-1429 TPG", "72423B"],
        ["19-1435 TPG", "714640"],
        ["18-1549 TPG", "BD3D3A"],
        ["18-1551 TPG", "B8373B"],
        ["18-1440 TPG", "944743"],
        ["18-1659 TPG", "B8333E"],
        ["18-1653 TPG", "BA2B42"],
        ["18-1654 TPG", "BB2F43"],
        ["18-1759 TPG", "B2334B"],
        ["18-1325 TPG", "7E4847"],
        ["19-1534 TPG", "7A393E"],
        ["19-1536 TPG", "7F4145"],
        ["19-1110 TPG", "4B3F40"],
        ["19-1214 TPG", "644B44"],
        ["19-1215 TPG", "5D4944"],
        ["19-1419 TPG", "574542"],
        ["12-1110 TPG", "F8DBC9"],
        ["13-1208 TPG", "E7BFB4"],
        ["12-2901 TPG", "E6D2C9"],
        ["14-1803 TPG", "DABEBA"],
        ["13-1511 TPG", "FAD0C9"],
        ["13-1520 TPG", "F8CDCD"],
        ["12-1813 TPG", "F8D3D5"],
        ["12-2907 TPG", "F8E3E8"],
        ["13-2808 TPG", "F0D1D8"],
        ["13-3207 TPG", "F5CFE0"],
        ["17-1926 TPG", "D36480"],
        ["18-1951 TPG", "BF3360"],
        ["17-2034 TPG", "CE4A7E"],
        ["18-2045 TPG", "C83E74"],
        ["18-3014 TPG", "805170"],
        ["19-2429 TPG", "6D3D5B"],
        ["19-2420 TPG", "58394B"],
        ["19-2620 TPG", "533A4B"],
        ["17-3240 TPG", "B66CA2"],
        ["18-3120 TPG", "925188"],
        ["18-3340 TPG", "6A4069"],
        ["17-2411 TPG", "998189"],
        ["16-1606 TPG", "96868B"],
        ["18-1705 TPG", "796372"],
        ["18-1708 TPG", "77636E"],
        ["14-3906 TPG", "B4ACB3"],
        ["17-1708 TPG", "776570"],
        ["18-1506 TPG", "6E5F61"],
        ["18-3530 TPG", "966E9C"],
        ["19-3425 TPG", "735079"],
        ["17-3520 TPG", "9E7FA6"],
        ["15-3520 TPG", "BE9EC9"],
        ["18-3540 TPG", "76528B"],
        ["18-3521 TPG", "6C4C7D"],
        ["18-3634 TPG", "7F619B"],
        ["15-3720 TPG", "B6A1CD"],
        ["17-3640 TPG", "997DB4"],
        ["15-3716 TPG", "B3A1CD"],
        ["16-3720 TPG", "A290C1"],
        ["17-3735 TPG", "9C8BBC"],
        ["19-3750 TPG", "4F3F68"],
        ["18-3839 TPG", "625593"],
        ["17-3929 TPG", "8B96C9"],
        ["17-3940 TPG", "757EB9"],
        ["18-3950 TPG", "6266A3"],
        ["14-3912 TPG", "A6AFC3"],
        ["15-3919 TPG", "95AAD3"],
        ["19-3930 TPG", "4F4F5C"],
        ["19-3831 TPG", "3E3D4C"],
        ["18-3917 TPG", "565F7E"],
        ["19-4055 TPG", "415786"],
        ["16-4033 TPG", "6585C1"],
        ["18-4048 TPG", "3F69AA"],
        ["19-4045 TPG", "2D5593"],
        ["19-4048 TPG", "30598C"],
        ["17-4028 TPG", "577199"],
        ["14-4122 TPG", "95B8D9"],
        ["17-4033 TPG", "5B84B1"],
        ["17-4032 TPG", "638DB7"],
        ["17-4029 TPG", "607DA0"],
        ["18-3929 TPG", "586C8A"],
        ["19-4029 TPG", "394868"],
        ["19-4031 TPG", "485167"],
        ["17-4245 TPG", "277FBB"],
        ["18-4250 TPG", "006FAF"],
        ["19-4038 TPG", "30475E"],
        ["19-4120 TPG", "2E4762"],
        ["19-4034 TPG", "2E4A62"],
        ["19-4122 TPG", "3D4959"],
        ["19-4126 TPG", "385265"],
        ["14-4320 TPG", "7AB7DC"],
        ["15-4428 TPG", "60B1D3"],
        ["18-4538 TPG", "007FAF"],
        ["17-4429 TPG", "3F86A3"],
        ["18-4430 TPG", "007493"],
        ["17-4530 TPG", "0088A5"],
        ["19-4536 TPG", "006883"],
        ["14-4315 TPG", "9AC1CD"],
        ["13-4720 TPG", "95DBE5"],
        ["13-5410 TPG", "AED6E0"],
        ["14-4615 TPG", "83C4CF"],
        ["14-4710 TPG", "83C5CA"],
        ["18-4630 TPG", "007286"],
        ["19-4540 TPG", "185E6F"],
        ["14-4620 TPG", "95DEE2"],
        ["13-4810 TPG", "99DEDF"],
        ["18-5025 TPG", "006E6D"],
        ["19-5030 TPG", "394F52"],
        ["19-5230 TPG", "345654"],
        ["19-5232 TPG", "375551"],
        ["18-5845 TPG", "00755D"],
        ["18-0330 TPG", "5C6C44"],
        ["18-0107 TPG", "60774F"],
        ["18-0220 TPG", "6B6D50"],
        ["17-0530 TPG", "7D7F44"],
        ["16-0545 TPG", "A29F4B"],
        ["16-0543 TPG", "9C9A40"],
        ["16-0550 TPG", "AEA84E"],
        ["14-0340 TPG", "BDE040"],
        ["13-0443 TPG", "C5DE48"],
        ["13-0651 TPG", "D3E031"],
        ["17-1314 TPG", "8E7A66"],
        ["17-1115 TPG", "8F7C64"],
        ["17-0630 TPG", "9B8F77"],
        ["17-1108 TPG", "998F7F"],
        ["16-1103 TPG", "B1A699"],
        ["17-1105 TPG", "95897E"],
        ["19-0823 TPG", "645A51"],
        ["19-0403 TPG", "645F55"],
        ["18-0625 TPG", "766F57"],
        ["19-0510 TPG", "67645A"],
        ["19-0413 TPG", "53554C"],
        ["13-4104 TPG", "C9C9C8"],
        ["13-4201 TPG", "C8C9CB"],
        ["14-4107 TPG", "BCBCBE"],
        ["14-4202 TPG", "B4B7BA"],
        ["17-3914 TPG", "8A8A8D"],
        ["18-5204 TPG", "696667"],
        ["19-0203 TPG", "555459"],
        ["17-4016 TPG", "898586"],
        ["16-3905 TPG", "9E9CA9"],
        ["18-3908 TPG", "686368"],
        ["19-3917 TPG", "58565B"],
        ["19-4003 TPG", "3F3D41"],
        ["19-3902 TPG", "4B484D"],
        ["19-3911 TPG", "3B3C40"]
    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });

};