const db = require('../configure/db');
const Book = require('../models/book')
const Category = require('../models/category')
//const User = require('../models/user')



db.sync({force: false})
  .then(Book.bulkCreate([
    {
      name: "Spermophilus tridecemlineatus",
      author: "Standford Mapham",
      year: 2005,
      editorial: "Military/Government/Technical",
      description: "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
      sold: 140,
      price: 243.28,
      stock: 184
    }, {
      name: "Ovis dalli stonei",
      author: "Cordell Dawid",
      year: 2007,
      editorial: "Industrial Machinery/Components",
      description: "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla",
      sold: 1,
      price: 1741.2,
      stock: 6
    }, {
      name: "Lepus arcticus",
      author: "Reinwald Cawdell",
      year: 2005,
      editorial: "n/a",
      description: "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
      sold: 14,
      price: 1554.35,
      stock: 5
    }, {
      name: "Ephipplorhynchus senegalensis",
      author: "Zacharia Strood",
      year: 1991,
      editorial: "Mining & Quarrying of Nonmetallic Minerals (No Fuels)",
      description: "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros",
      sold: 142,
      price: 293.51,
      stock: 74
    }, {
      name: "Alopex lagopus",
      author: "Elyssa Beranek",
      year: 2004,
      editorial: "n/a",
      description: "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas",
      sold: 167,
      price: 1296.36,
      stock: 62
    }, {
      name: "Sciurus vulgaris",
      author: "Dorisa Nugent",
      year: 2006,
      editorial: "n/a",
      description: "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
      sold: 138,
      price: 1718.62,
      stock: 132
    }, {
      name: "Corvus albus",
      author: "Ceil Geeritz",
      year: 2005,
      editorial: "n/a",
      description: "blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
      sold: 85,
      price: 1565.69,
      stock: 144
    }, {
      name: "Cacatua tenuirostris",
      author: "Turner Kissick",
      year: 2009,
      editorial: "Consumer Specialties",
      description: "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna",
      sold: 47,
      price: 266.4,
      stock: 175
    }, {
      name: "Zosterops pallidus",
      author: "Kylen Garwood",
      year: 1984,
      editorial: "Multi-Sector Companies",
      description: "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
      sold: 187,
      price: 755.73,
      stock: 132
    }, {
      name: "Ratufa indica",
      author: "Geno Coot",
      year: 2006,
      editorial: "Electrical Products",
      description: "curabitur in libero ut massa volutpat convallis morbi odio odio",
      sold: 193,
      price: 893.34,
      stock: 55
    }, {
      name: "Phoca vitulina",
      author: "Van Frean",
      year: 2001,
      editorial: "Specialty Insurers",
      description: "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus",
      sold: 90,
      price: 698.35,
      stock: 2
    }, {
      name: "Odocoilenaus virginianus",
      author: "Alric Claiton",
      year: 2000,
      editorial: "Specialty Chemicals",
      description: "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque",
      sold: 68,
      price: 1293.66,
      stock: 53
    }, {
      name: "Chlamydosaurus kingii",
      author: "Cherish Le Barr",
      year: 1986,
      editorial: "Finance: Consumer Services",
      description: "nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
      sold: 197,
      price: 151.86,
      stock: 38
    }, {
      name: "Turtur chalcospilos",
      author: "Ferdinand Dwelly",
      year: 1995,
      editorial: "Shoe Manufacturing",
      description: "justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
      sold: 57,
      price: 543.02,
      stock: 40
    }, {
      name: "Cervus canadensis",
      author: "Celestyna Nestle",
      year: 2008,
      editorial: "n/a",
      description: "venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris",
      sold: 187,
      price: 1595.7,
      stock: 151
    }, {
      name: "Ceratotherium simum",
      author: "Gabriellia Dymick",
      year: 2002,
      editorial: "n/a",
      description: "lacinia sapien quis libero nullam sit amet turpis elementum ligula",
      sold: 57,
      price: 1054.18,
      stock: 178
    }, {
      name: "Mirounga angustirostris",
      author: "Halley Bouts",
      year: 1993,
      editorial: "Military/Government/Technical",
      description: "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
      sold: 120,
      price: 675.88,
      stock: 166
    }, {
      name: "Felis silvestris lybica",
      author: "Kienan Hiseman",
      year: 1993,
      editorial: "Steel/Iron Ore",
      description: "non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
      sold: 148,
      price: 1958.89,
      stock: 154
    }, {
      name: "Threskionis aethiopicus",
      author: "Ruthie Gartin",
      year: 2011,
      editorial: "n/a",
      description: "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet",
      sold: 118,
      price: 830.09,
      stock: 188
    }, {
      name: "Orcinus orca",
      author: "Arlen Dahlback",
      year: 1993,
      editorial: "Electrical Products",
      description: "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
      sold: 81,
      price: 691.7,
      stock: 28
    }, {
      name: "Eudyptula minor",
      author: "Rickey Georgeot",
      year: 2005,
      editorial: "Major Pharmaceuticals",
      description: "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo",
      sold: 41,
      price: 1761.08,
      stock: 180
    }, {
      name: "Uraeginthus bengalus",
      author: "Matthias Toghill",
      year: 1987,
      editorial: "Transportation Services",
      description: "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
      sold: 178,
      price: 1409.71,
      stock: 170
    }, {
      name: "Streptopelia decipiens",
      author: "Myrta Hamshar",
      year: 2001,
      editorial: "Marine Transportation",
      description: "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
      sold: 186,
      price: 516.77,
      stock: 137
    }, {
      name: "Buteo regalis",
      author: "Esdras Laurie",
      year: 2012,
      editorial: "Finance: Consumer Services",
      description: "nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate",
      sold: 9,
      price: 1681.95,
      stock: 5
    }, {
      name: "Paraxerus cepapi",
      author: "Marleen Wharfe",
      year: 2012,
      editorial: "n/a",
      description: "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
      sold: 85,
      price: 823.93,
      stock: 188
    }, {
      name: "Varanus salvator",
      author: "Valentia Royson",
      year: 1993,
      editorial: "EDP Services",
      description: "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
      sold: 13,
      price: 1435.03,
      stock: 67
    }, {
      name: "Macaca radiata",
      author: "Alessandra Waggatt",
      year: 1996,
      editorial: "Business Services",
      description: "fusce posuere felis sed lacus morbi sem mauris laoreet ut",
      sold: 43,
      price: 1036.62,
      stock: 1
    }, {
      name: "Chauna torquata",
      author: "Burtie Macallam",
      year: 1999,
      editorial: "Major Pharmaceuticals",
      description: "magna at nunc commodo placerat praesent blandit nam nulla integer",
      sold: 73,
      price: 55.63,
      stock: 177
    }, {
      name: "Graspus graspus",
      author: "Gussy Antonchik",
      year: 1989,
      editorial: "Professional Services",
      description: "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
      sold: 185,
      price: 1146.55,
      stock: 16
    }, {
      name: "Felis silvestris lybica",
      author: "Phillipp Orae",
      year: 1989,
      editorial: "n/a",
      description: "dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac",
      sold: 159,
      price: 794.22,
      stock: 93
    }, {
      name: "Cracticus nigroagularis",
      author: "Katalin O' Clovan",
      year: 2004,
      editorial: "n/a",
      description: "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
      sold: 1,
      price: 1400.58,
      stock: 81
    }, {
      name: "Mazama gouazoubira",
      author: "Dorella Cowdery",
      year: 2001,
      editorial: "Industrial Machinery/Components",
      description: "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
      sold: 173,
      price: 998.79,
      stock: 179
    }, {
      name: "Carduelis pinus",
      author: "Romola Eldered",
      year: 2004,
      editorial: "Agricultural Chemicals",
      description: "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
      sold: 166,
      price: 916.85,
      stock: 140
    }, {
      name: "Ara ararauna",
      author: "Dulci Dewire",
      year: 2002,
      editorial: "Major Banks",
      description: "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac",
      sold: 159,
      price: 1794.25,
      stock: 39
    }, {
      name: "Ara ararauna",
      author: "Lorie Vernazza",
      year: 1990,
      editorial: "Major Pharmaceuticals",
      description: "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit",
      sold: 158,
      price: 120.54,
      stock: 188
    }, {
      name: "Varanus sp.",
      author: "Salem Rickaert",
      year: 2006,
      editorial: "n/a",
      description: "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
      sold: 6,
      price: 528.94,
      stock: 125
    }, {
      name: "Globicephala melas",
      author: "Perla La Croce",
      year: 2001,
      editorial: "n/a",
      description: "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
      sold: 122,
      price: 1781.64,
      stock: 50
    }, {
      name: "Panthera tigris",
      author: "Gabbey Sabati",
      year: 2009,
      editorial: "Property-Casualty Insurers",
      description: "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
      sold: 84,
      price: 271.52,
      stock: 120
    }, {
      name: "Milvago chimachima",
      author: "Kerr Meakes",
      year: 1998,
      editorial: "n/a",
      description: "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
      sold: 67,
      price: 1236.29,
      stock: 23
    }, {
      name: "Casmerodius albus",
      author: "Hervey Goundsy",
      year: 1998,
      editorial: "n/a",
      description: "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
      sold: 104,
      price: 703.08,
      stock: 27
    }, {
      name: "Anser anser",
      author: "Anitra Pinnick",
      year: 1992,
      editorial: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
      description: "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget",
      sold: 121,
      price: 173.15,
      stock: 64
    }, {
      name: "Kobus vardonii vardoni",
      author: "Carrie Brereton",
      year: 1997,
      editorial: "Major Pharmaceuticals",
      description: "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
      sold: 160,
      price: 391.81,
      stock: 90
    }, {
      name: "Gyps bengalensis",
      author: "Fayette O'Scollee",
      year: 1996,
      editorial: "Major Pharmaceuticals",
      description: "nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
      sold: 123,
      price: 1841.2,
      stock: 152
    }, {
      name: "Hippotragus equinus",
      author: "Britta Utteridge",
      year: 1996,
      editorial: "n/a",
      description: "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna",
      sold: 76,
      price: 295.53,
      stock: 124
    }, {
      name: "Ciconia episcopus",
      author: "Morgen Pinchbeck",
      year: 1992,
      editorial: "Oil & Gas Production",
      description: "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
      sold: 5,
      price: 1592.68,
      stock: 22
    }, {
      name: "Gymnorhina tibicen",
      author: "Lisette Haswell",
      year: 1985,
      editorial: "Business Services",
      description: "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem",
      sold: 158,
      price: 1530.36,
      stock: 146
    }, {
      name: "Bassariscus astutus",
      author: "Lancelot Wofenden",
      year: 2011,
      editorial: "n/a",
      description: "volutpat eleifend donec ut dolor morbi vel lectus in quam",
      sold: 73,
      price: 1668.53,
      stock: 92
    }, {
      name: "Pseudalopex gymnocercus",
      author: "Pauli Petrik",
      year: 2008,
      editorial: "n/a",
      description: "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
      sold: 148,
      price: 1547.23,
      stock: 56
    }, {
      name: "Ateles paniscus",
      author: "Kelsey Hatherell",
      year: 2007,
      editorial: "n/a",
      description: "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
      sold: 73,
      price: 110.28,
      stock: 146
    }, {
      name: "Mazama gouazoubira",
      author: "Hanson Davern",
      year: 1997,
      editorial: "n/a",
      description: "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut",
      sold: 200,
      price: 234.79,
      stock: 53
    }, {
      name: "Antilocapra americana",
      author: "Doralyn Wessel",
      year: 1993,
      editorial: "Computer Software: Prepackaged Software",
      description: "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel",
      sold: 73,
      price: 1966.97,
      stock: 36
    }, {
      name: "Corvus albicollis",
      author: "Oliy Rudiger",
      year: 2013,
      editorial: "Property-Casualty Insurers",
      description: "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
      sold: 97,
      price: 1756.94,
      stock: 109
    }, {
      name: "Paraxerus cepapi",
      author: "Sherill Thamelt",
      year: 1996,
      editorial: "Industrial Machinery/Components",
      description: "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu",
      sold: 180,
      price: 1433.56,
      stock: 27
    }, {
      name: "unavailable",
      author: "Normy Dilgarno",
      year: 2012,
      editorial: "Television Services",
      description: "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci",
      sold: 119,
      price: 123.65,
      stock: 163
    }, {
      name: "Gyps bengalensis",
      author: "Juliana Reavell",
      year: 2010,
      editorial: "Finance: Consumer Services",
      description: "semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
      sold: 146,
      price: 452.28,
      stock: 68
    }, {
      name: "Colaptes campestroides",
      author: "Nicoline Delooze",
      year: 1984,
      editorial: "Business Services",
      description: "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
      sold: 127,
      price: 1694.0,
      stock: 168
    }, {
      name: "Rangifer tarandus",
      author: "Xavier Mallock",
      year: 2010,
      editorial: "Business Services",
      description: "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
      sold: 18,
      price: 433.06,
      stock: 122
    }, {
      name: "Ovis ammon",
      author: "Eldridge Wemyss",
      year: 1999,
      editorial: "Engineering & Construction",
      description: "fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
      sold: 95,
      price: 1862.96,
      stock: 140
    }, {
      name: "Choloepus hoffmani",
      author: "Emmye Southcoat",
      year: 2005,
      editorial: "Services-Misc. Amusement & Recreation",
      description: "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla",
      sold: 85,
      price: 1025.19,
      stock: 76
    }, {
      name: "Taxidea taxus",
      author: "Loise Purser",
      year: 1977,
      editorial: "Industrial Machinery/Components",
      description: "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim",
      sold: 79,
      price: 824.06,
      stock: 93
    }, {
      name: "Cercopithecus aethiops",
      author: "Brock Delph",
      year: 1999,
      editorial: "Major Banks",
      description: "justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
      sold: 98,
      price: 148.02,
      stock: 46
    }, {
      name: "Lamprotornis nitens",
      author: "Martainn Wonham",
      year: 1996,
      editorial: "Metal Fabrications",
      description: "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet",
      sold: 155,
      price: 607.52,
      stock: 184
    }, {
      name: "Perameles nasuta",
      author: "Bevin Errigo",
      year: 2011,
      editorial: "Computer Communications Equipment",
      description: "in est risus auctor sed tristique in tempus sit amet",
      sold: 140,
      price: 1005.43,
      stock: 111
    }, {
      name: "Lophoaetus occipitalis",
      author: "Troy Whitton",
      year: 1995,
      editorial: "Property-Casualty Insurers",
      description: "nec nisi volutpat eleifend donec ut dolor morbi vel lectus",
      sold: 93,
      price: 1069.75,
      stock: 195
    }, {
      name: "Mazama americana",
      author: "Carilyn Ayres",
      year: 1996,
      editorial: "Military/Government/Technical",
      description: "vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis",
      sold: 157,
      price: 1971.84,
      stock: 95
    }, {
      name: "Limnocorax flavirostra",
      author: "Filmore Seven",
      year: 2008,
      editorial: "Major Pharmaceuticals",
      description: "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit",
      sold: 142,
      price: 1446.21,
      stock: 2
    }, {
      name: "Loxodonta africana",
      author: "Natalya De Gregoli",
      year: 1992,
      editorial: "Property-Casualty Insurers",
      description: "in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
      sold: 67,
      price: 790.18,
      stock: 63
    }, {
      name: "Litrocranius walleri",
      author: "Tildy McNern",
      year: 1996,
      editorial: "n/a",
      description: "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est",
      sold: 159,
      price: 196.9,
      stock: 191
    }, {
      name: "Petaurus breviceps",
      author: "Alberik Tytler",
      year: 1990,
      editorial: "Business Services",
      description: "adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
      sold: 11,
      price: 406.01,
      stock: 177
    }, {
      name: "Larus fuliginosus",
      author: "Adrianna Sacher",
      year: 2003,
      editorial: "Major Banks",
      description: "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit",
      sold: 186,
      price: 445.87,
      stock: 43
    }, {
      name: "Ammospermophilus nelsoni",
      author: "Katerina Meeron",
      year: 2000,
      editorial: "Oil/Gas Transmission",
      description: "nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
      sold: 77,
      price: 257.01,
      stock: 79
    }, {
      name: "Macaca fuscata",
      author: "Arlee Wreakes",
      year: 1992,
      editorial: "Major Banks",
      description: "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
      sold: 161,
      price: 1528.77,
      stock: 63
    }, {
      name: "Terathopius ecaudatus",
      author: "Rice Whitrod",
      year: 1992,
      editorial: "Meat/Poultry/Fish",
      description: "quisque arcu libero rutrum ac lobortis vel dapibus at diam",
      sold: 86,
      price: 896.71,
      stock: 130
    }, {
      name: "Drymarchon corias couperi",
      author: "Birdie Cockland",
      year: 2008,
      editorial: "EDP Services",
      description: "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
      sold: 192,
      price: 552.2,
      stock: 74
    }, {
      name: "Genetta genetta",
      author: "Helenelizabeth Fullylove",
      year: 2012,
      editorial: "n/a",
      description: "id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
      sold: 16,
      price: 1095.55,
      stock: 112
    }, {
      name: "Fratercula corniculata",
      author: "Olvan Greenhouse",
      year: 2012,
      editorial: "n/a",
      description: "vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
      sold: 33,
      price: 1175.15,
      stock: 14
    }, {
      name: "Mazama gouazoubira",
      author: "Tommie Foote",
      year: 2005,
      editorial: "Beverages (Production/Distribution)",
      description: "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
      sold: 182,
      price: 775.8,
      stock: 194
    }, {
      name: "Ciconia episcopus",
      author: "Muhammad Berthelet",
      year: 1967,
      editorial: "Industrial Machinery/Components",
      description: "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
      sold: 135,
      price: 1584.95,
      stock: 159
    }, {
      name: "Semnopithecus entellus",
      author: "Dave Antonikov",
      year: 2005,
      editorial: "n/a",
      description: "in ante vestibulum ante ipsum primis in faucibus orci luctus et",
      sold: 118,
      price: 1023.27,
      stock: 196
    }, {
      name: "unavailable",
      author: "Fannie Kowal",
      year: 2004,
      editorial: "n/a",
      description: "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
      sold: 66,
      price: 1337.38,
      stock: 53
    }, {
      name: "Acanthaster planci",
      author: "Viviene Tremayne",
      year: 1996,
      editorial: "n/a",
      description: "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
      sold: 102,
      price: 643.41,
      stock: 87
    }, {
      name: "Odocoilenaus virginianus",
      author: "Penrod Jeary",
      year: 2011,
      editorial: "n/a",
      description: "amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
      sold: 63,
      price: 150.35,
      stock: 198
    }, {
      name: "Paroaria gularis",
      author: "Adela Haymes",
      year: 2000,
      editorial: "n/a",
      description: "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
      sold: 114,
      price: 182.58,
      stock: 90
    }, {
      name: "Ara chloroptera",
      author: "Roderick Ezzle",
      year: 2007,
      editorial: "Semiconductors",
      description: "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus",
      sold: 14,
      price: 1433.03,
      stock: 146
    }, {
      name: "Sciurus niger",
      author: "Vivyanne Whiles",
      year: 2007,
      editorial: "Major Banks",
      description: "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
      sold: 162,
      price: 1246.32,
      stock: 132
    }, {
      name: "Mungos mungo",
      author: "Gavrielle Hodgin",
      year: 2010,
      editorial: "Computer Software: Prepackaged Software",
      description: "varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla",
      sold: 160,
      price: 1260.43,
      stock: 114
    }, {
      name: "Pteropus rufus",
      author: "Chev Kenewell",
      year: 2000,
      editorial: "Real Estate Investment Trusts",
      description: "tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
      sold: 115,
      price: 1404.82,
      stock: 86
    }, {
      name: "Chlidonias leucopterus",
      author: "Terrijo Leechman",
      year: 2010,
      editorial: "Major Pharmaceuticals",
      description: "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
      sold: 67,
      price: 607.96,
      stock: 131
    }, {
      name: "Gyps fulvus",
      author: "Jackie Jerwood",
      year: 2006,
      editorial: "Medical/Dental Instruments",
      description: "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam",
      sold: 69,
      price: 673.63,
      stock: 176
    }, {
      name: "Felis concolor",
      author: "Clarey Witul",
      year: 1989,
      editorial: "Building Products",
      description: "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
      sold: 73,
      price: 842.53,
      stock: 150
    }, {
      name: "Felis caracal",
      author: "Rinaldo Karleman",
      year: 2005,
      editorial: "Major Banks",
      description: "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
      sold: 188,
      price: 437.71,
      stock: 34
    }, {
      name: "Varanus sp.",
      author: "Marigold Coneau",
      year: 1997,
      editorial: "Property-Casualty Insurers",
      description: "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae",
      sold: 39,
      price: 364.73,
      stock: 154
    }, {
      name: "Dusicyon thous",
      author: "Hana Ewbach",
      year: 2011,
      editorial: "Steel/Iron Ore",
      description: "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam",
      sold: 31,
      price: 1578.47,
      stock: 83
    }, {
      name: "Anitibyx armatus",
      author: "Petey Yule",
      year: 2010,
      editorial: "Restaurants",
      description: "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante",
      sold: 87,
      price: 27.29,
      stock: 133
    }, {
      name: "Phoca vitulina",
      author: "Tadeas Creboe",
      year: 1998,
      editorial: "n/a",
      description: "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris",
      sold: 30,
      price: 863.96,
      stock: 59
    }, {
      name: "Anthropoides paradisea",
      author: "Shirl Ruddiman",
      year: 1967,
      editorial: "Electric Utilities: Central",
      description: "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
      sold: 101,
      price: 316.7,
      stock: 127
    }, {
      name: "Felis concolor",
      author: "Dian Jenton",
      year: 2004,
      editorial: "Major Pharmaceuticals",
      description: "primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat",
      sold: 147,
      price: 1923.42,
      stock: 64
    }, {
      name: "unavailable",
      author: "Pearla Danilishin",
      year: 2006,
      editorial: "Farming/Seeds/Milling",
      description: "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
      sold: 161,
      price: 1477.51,
      stock: 3
    }, {
      name: "Eremophila alpestris",
      author: "Sabine Varren",
      year: 2005,
      editorial: "Clothing/Shoe/Accessory Stores",
      description: "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
      sold: 110,
      price: 617.99,
      stock: 56
    }, {
      name: "Buteo galapagoensis",
      author: "Ajay McKew",
      year: 2005,
      editorial: "Integrated oil Companies",
      description: "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
      sold: 106,
      price: 1531.52,
      stock: 122
    }]
  ))
  .then(Category.bulkCreate([
  { category: 'Police' },
  { category: 'Thriller' },
  { category: 'Romantic' },
  { category: 'Adventure' },
  { category: 'Terror' },
  { category: 'Fiction' },
  { category: 'Reality' },
  { category: 'Science fiction' },
  { category: 'Investigation' },
  { category: 'Biographical' },
  { category: 'Childish' },
  { category: 'Self-help' },
  { category: 'Erotica' },
  { category: 'Home' },
  { category: 'Encyclopedia' },
  { category: 'Manual' },
  { category: 'Politics' },
  { category: 'Economy' },
  { category: 'Marketing' },
  { category: 'Society' },
  { category: 'sports' },
  { category: 'Travel' },
  { category: 'Culture' },
])
  .then(() => console.log('data was created')))




// User.bulkCreate([
//   {
//     userName: "Alfie Piddick",
//     password: "lclC3DrIX",
//     salt: "fdc03a97-5967-4a1c-a91a-2ee9977a1b63",
//     email: "apiddick0@creativecommons.org",
//     address: "9 Mcguire Avenue",
//     isAdmin: false,
//     shopCartId: 1
//   }, {
//     "userName": "Tiffie Angus",
//     password: "sakk49V",
//     salt: "bcd180d0-ef6b-482d-9cc9-2e2b53e2f794",
//     email: "tangus1@de.vu",
//     address: "8 Fairfield Park",
//     isAdmin: false,
//     shopCartId: 2
//   }, {
//     "userName": "Hermine Brizell",
//     password: "MBsjfbd",
//     salt: "6570a5b3-acb2-4115-944c-cc35c01e756b",
//     email: "hbrizell2@macromedia.com",
//     address: "588 Westport Terrace",
//     isAdmin: false,
//     shopCartId: 3
//   }, {
//     "userName": "Randolph Pedycan",
//     password: "18OVGL",
//     salt: "5a11853c-ea10-4521-9ae4-a0a5fe64e8ca",
//     email: "rpedycan3@weibo.com",
//     address: "286 Hanover Trail",
//     isAdmin: false,
//     shopCartId: 4
//   }, {
//     "userName": "Eugenie Jansky",
//     password: "9LddnM",
//     salt: "1a902be7-3fe3-44f6-bcdd-5aa54001fb28",
//     email: "ejansky4@vinaora.com",
//     address: "0 Northland Pass",
//     isAdmin: false,
//     shopCartId: 5
//   }, {
//     "userName": "Gherardo Mennear",
//     password: "rWvSYpvL",
//     salt: "99054692-355a-4036-9208-19be852324ab",
//     email: "gmennear5@nyu.edu",
//     address: "399 Hudson Court",
//     isAdmin: false,
//     shopCartId: 6
//   }, {
//     "userName": "Niki Beckensall",
//     password: "7dOrjt",
//     salt: "a04ea88e-e34c-42d8-bb2a-c739f71b15f0",
//     email: "nbeckensall6@alexa.com",
//     address: "5 Truax Park",
//     isAdmin: false,
//     shopCartId: 7
//   }, {
//     "userName": "Kalil De Simoni",
//     password: "jxVbjv",
//     salt: "8f5b4bfd-050d-41bb-8153-20dbb559e34d",
//     email: "kde7@ask.com",
//     address: "82943 Sommers Place",
//     isAdmin: false,
//     shopCartId: 8
//   }, {
//     "userName": "Parker Warr",
//     password: "ksJnF7n44Qk",
//     salt: "e65cb5a7-4253-40ce-ad6a-53e4e717d13e",
//     email: "pwarr8@forbes.com",
//     address: "675 Sommers Way",
//     isAdmin: false,
//     shopCartId: 9
//   }, {
//     "userName": "Gaye Fowle",
//     password: "u8sfQg12IM",
//     salt: "e54de537-55d7-4b7a-af0e-6fb560664a6d",
//     email: "gfowle9@smh.com.au",
//     address: "35654 Nelson Avenue",
//     isAdmin: false,
//     shopCartId: 10
//   }, {
//     "userName": "Jacquette Hollibone",
//     password: "7rNa5Of",
//     salt: "721fc1de-32a5-422e-aec0-b253e76198d6",
//     email: "jhollibonea@discovery.com",
//     address: "092 Merry Park",
//     isAdmin: false,
//     shopCartId: 11
//   }, {
//     "userName": "Bernadina Mewrcik",
//     password: "SoEjGlyHfyrD",
//     salt: "b1e26d89-a2aa-4505-b69e-1e6defe91967",
//     email: "bmewrcikb@state.gov",
//     address: "8 Petterle Court",
//     isAdmin: false,
//     shopCartId: 12
//   }, {
//     "userName": "Carolyn Simoes",
//     password: "7rshw60GvBqh",
//     salt: "5a8ed5fb-273f-4698-881c-447eda004d16",
//     email: "csimoesc@jugem.jp",
//     address: "807 Warner Point",
//     isAdmin: false,
//     shopCartId: 13
//   }, {
//     "userName": "Gustav Treacher",
//     password: "UYZLT4bBd",
//     salt: "e539914b-c3c3-4925-b05d-265faee0cf4b",
//     email: "gtreacherd@jigsy.com",
//     address: "3 School Road",
//     isAdmin: false,
//     shopCartId: 14
//   }, {
//     "userName": "Jobina Stainsby",
//     password: "WcUpu6oXWAJ",
//     salt: "68e1b2bc-a637-46c5-a98f-39c5b0d31ef9",
//     email: "jstainsbye@freewebs.com",
//     address: "58 Lerdahl Lane",
//     isAdmin: false,
//     shopCartId: 15
//   }, {
//     "userName": "Orlan Johanning",
//     password: "LEm7Oq",
//     salt: "8bc5f58e-7208-4e3a-9886-2d75733b64bd",
//     email: "ojohanningf@mit.edu",
//     address: "9 Luster Circle",
//     isAdmin: false,
//     shopCartId: 16
//   }, {
//     "userName": "Albertine Wannell",
//     password: "JkL0LT8",
//     salt: "52dd3c5b-7c58-4dfd-bed4-4b9a71c8197b",
//     email: "awannellg@nyu.edu",
//     address: "1000 Mifflin Way",
//     isAdmin: false,
//     shopCartId: 17
//   }, {
//     "userName": "Shela Cauthra",
//     password: "9mER2X",
//     salt: "00be659d-b98a-45ec-90ef-c0c0f8805f86",
//     email: "scauthrah@theglobeandmail.com",
//     address: "2 Eastlawn Hill",
//     isAdmin: false,
//     shopCartId: 18
//   }, {
//     "userName": "Loree Marrington",
//     password: "vkMyd9yR44H",
//     salt: "414e54ca-b846-4c51-a96a-47a530e0fa2f",
//     email: "lmarringtoni@earthlink.net",
//     address: "5633 Bonner Circle",
//     isAdmin: false,
//     shopCartId: 19
//   }, {
//     "userName": "Florrie Rolph",
//     password: "DjnQXsPnJ",
//     salt: "de115c9f-8914-4649-a729-040bf3045aa3",
//     email: "frolphj@storify.com",
//     address: "07206 Harper Parkway",
//     isAdmin: false,
//     shopCartId: 20
//   }, {
//     "userName": "Sol Greenman",
//     password: "4AoZ9vPepa",
//     salt: "9deed7c4-d2f6-4087-844d-c1c81da8a516",
//     email: "sgreenmank@artisteer.com",
//     address: "73 Warrior Plaza",
//     isAdmin: false,
//     shopCartId: 21
//   }, {
//     "userName": "Annice Lassen",
//     password: "ogl7MwY",
//     salt: "80b74ff3-466e-4d97-9b2b-29fd0315d2d0",
//     email: "alassenl@geocities.jp",
//     address: "740 Elgar Park",
//     isAdmin: false,
//     shopCartId: 22
//   }, {
//     "userName": "Mel Farherty",
//     password: "aThBGKD",
//     salt: "108fb7ca-337e-4dda-a56e-efa3fee008e5",
//     email: "mfarhertym@china.com.cn",
//     address: "9483 Stuart Court",
//     isAdmin: false,
//     shopCartId: 23
//   }, {
//     "userName": "Elayne Seal",
//     password: "gbuQoc0j4ct",
//     salt: "a31cbc92-c523-4a81-95fc-4befa0c3dabd",
//     email: "esealn@etsy.com",
//     address: "00 Lakewood Gardens Court",
//     isAdmin: false,
//     shopCartId: 24
//   }, {
//     "userName": "Vite Macauley",
//     password: "g1mwQNvaK",
//     salt: "0b1edea3-bc4c-48a5-bd2a-3a5e725e7115",
//     email: "vmacauleyo@cloudflare.com",
//     address: "944 Golden Leaf Terrace",
//     isAdmin: false,
//     shopCartId: 25
//   }, {
//     "userName": "Lisabeth Gatman",
//     password: "Fein77i",
//     salt: "24ae9ab1-42b1-4959-b40e-09bba9e3c422",
//     email: "lgatmanp@mashable.com",
//     address: "226 Bellgrove Court",
//     isAdmin: false,
//     shopCartId: 26
//   }, {
//     "userName": "Eal Skivington",
//     password: "Pju5Qt6",
//     salt: "e8158e19-242e-48fb-a193-0e72ccb2ad0a",
//     email: "eskivingtonq@columbia.edu",
//     address: "45 Mayfield Park",
//     isAdmin: false,
//     shopCartId: 27
//   }, {
//     "userName": "Beryl Prayer",
//     password: "uFlFZ8W",
//     salt: "de867d0a-11c5-4879-9d28-9bfb12da2486",
//     email: "bprayerr@edublogs.org",
//     address: "3 Fremont Avenue",
//     isAdmin: false,
//     shopCartId: 28
//   }, {
//     "userName": "Stephannie Shieber",
//     password: "8JyXy9JzfQp",
//     salt: "07a98961-bcb8-4c90-a1fc-8ce1a5b6ac52",
//     email: "sshiebers@yellowbook.com",
//     address: "16938 5th Pass",
//     isAdmin: false,
//     shopCartId: 29
//   }, {
//     "userName": "Rosella Ebenezer",
//     password: "YvjyOm",
//     salt: "2e90b0f2-f220-456a-8188-b4578bdd5614",
//     email: "rebenezert@drupal.org",
//     address: "325 Columbus Crossing",
//     isAdmin: false,
//     shopCartId: 30
//   }, {
//     "userName": "Kelli Shenley",
//     password: "MtQhGCAR",
//     salt: "13ca4a37-ddfc-4b0d-ab5a-3fa92b6c02cb",
//     email: "kshenleyu@plala.or.jp",
//     address: "6 Morningstar Hill",
//     isAdmin: false,
//     shopCartId: 31
//   }, {
//     "userName": "Ellette Geillier",
//     password: "7PKNC4x02IPx",
//     salt: "e1833690-965a-4bab-9426-b7fd07f3c637",
//     email: "egeillierv@e-recht24.de",
//     address: "44 Shasta Place",
//     isAdmin: false,
//     shopCartId: 32
//   }, {
//     "userName": "Worth D'Elia",
//     password: "n1AzpJqm76uZ",
//     salt: "14a974c3-ef27-4e91-bebe-7b4c3f419e7c",
//     email: "wdeliaw@github.io",
//     address: "59 Fair Oaks Street",
//     isAdmin: false,
//     shopCartId: 33
//   }, {
//     "userName": "Lucie Wickmann",
//     password: "SIL2bWK",
//     salt: "74ba89b3-6916-4985-8d4b-16eeab6994b6",
//     email: "lwickmannx@forbes.com",
//     address: "65 Morning Point",
//     isAdmin: false,
//     shopCartId: 34
//   }, {
//     "userName": "Karlene Gogerty",
//     password: "hLJi7XNzPLlZ",
//     salt: "ba97de92-6971-4b68-acdd-3779cf02c4cc",
//     email: "kgogertyy@qq.com",
//     address: "62884 Iowa Place",
//     isAdmin: false,
//     shopCartId: 35
//   }, {
//     "userName": "Hermon McCarry",
//     password: "U8bIUfu4",
//     salt: "9b700b4c-c2d9-430d-ba8c-aeccb460243e",
//     email: "hmccarryz@wikispaces.com",
//     address: "39430 Luster Street",
//     isAdmin: false,
//     shopCartId: 36
//   }, {
//     "userName": "Charis Farlamb",
//     password: "WzjdPa",
//     salt: "61cb4d3c-5f2f-49c8-8ee5-2928a5799d1e",
//     email: "cfarlamb10@dmoz.org",
//     address: "4 Ruskin Place",
//     isAdmin: false,
//     shopCartId: 37
//   }, {
//     "userName": "Madelle Benmore",
//     password: "EivFAvVehmi",
//     salt: "5a293919-0448-4ad0-9bdb-3f7faf5d2f57",
//     email: "mbenmore11@nifty.com",
//     address: "260 Towne Parkway",
//     isAdmin: false,
//     shopCartId: 38
//   }, {
//     "userName": "Ring Phelps",
//     password: "N4cDyTpyOlsG",
//     salt: "f9ecf11b-65f1-469e-b29e-9bb1a515ecff",
//     email: "rphelps12@goodreads.com",
//     address: "715 Bayside Court",
//     isAdmin: false,
//     shopCartId: 39
//   }, {
//     "userName": "Mair Wringe",
//     password: "NXsSfC",
//     salt: "c3e0d9b1-91c5-4463-960b-eca2c531d766",
//     email: "mwringe13@reddit.com",
//     address: "41425 Garrison Point",
//     isAdmin: false,
//     shopCartId: 40
//   }, {
//     "userName": "Florinda Covelle",
//     password: "rYs9bOGko",
//     salt: "f2221795-0b32-4f08-88e2-6d148718271d",
//     email: "fcovelle14@smh.com.au",
//     address: "4053 Nobel Place",
//     isAdmin: false,
//     shopCartId: 41
//   }, {
//     "userName": "Fernanda Block",
//     password: "ViNhzgMf",
//     salt: "1b485f6b-0283-4bba-bedc-72e4ba251836",
//     email: "fblock15@icio.us",
//     address: "51 Shasta Way",
//     isAdmin: false,
//     shopCartId: 42
//   }, {
//     "userName": "Misty Dombrell",
//     password: "70N9sU",
//     salt: "6d659553-0062-4d3a-9488-57f9b903d2b9",
//     email: "mdombrell16@i2i.jp",
//     address: "336 Harper Court",
//     isAdmin: false,
//     shopCartId: 43
//   }, {
//     "userName": "Sharyl Geeson",
//     password: "z8mCqZ",
//     salt: "4446d563-5242-4dc5-a1b8-6e475982e6e4",
//     email: "sgeeson17@zdnet.com",
//     address: "02175 Union Parkway",
//     isAdmin: false,
//     shopCartId: 44
//   }, {
//     "userName": "Gris Godsal",
//     password: "oObvls",
//     salt: "39114736-7821-4977-9938-11a6173f3b0e",
//     email: "ggodsal18@tamu.edu",
//     address: "2 Farwell Street",
//     isAdmin: false,
//     shopCartId: 45
//   }, {
//     "userName": "Marvin Ethelstone",
//     password: "ZbjKiWeE",
//     salt: "fadb54bf-244e-4569-a59a-a6d1065089fd",
//     email: "methelstone19@nhs.uk",
//     address: "626 Warrior Avenue",
//     isAdmin: false,
//     shopCartId: 46
//   }, {
//     "userName": "Biddy Wallett",
//     password: "RfCkdEz",
//     salt: "62dceedc-091b-4149-820f-77bf4db231d6",
//     email: "bwallett1a@reddit.com",
//     address: "1 Shasta Crossing",
//     isAdmin: false,
//     shopCartId: 47
//   }, {
//     "userName": "Betteann Bruford",
//     password: "7aRzgn",
//     salt: "dfebab82-5b30-48ad-981f-e82446ad8fc4",
//     email: "bbruford1b@last.fm",
//     address: "1 Talisman Junction",
//     isAdmin: false,
//     shopCartId: 48
//   }, {
//     "userName": "Dre Fudger",
//     password: "k4XJQSK",
//     salt: "d64ffa5f-a7f2-4be1-bb7d-5f394b18dd2e",
//     email: "dfudger1c@google.es",
//     address: "362 Carberry Pass",
//     isAdmin: false,
//     shopCartId: 49
//   }, {
//     "userName": "Lind Cisland",
//     password: "ovQYVus",
//     salt: "4354994a-d5a8-46ac-9fb3-0abdc0de52b5",
//     email: "lcisland1d@w3.org",
//     address: "97705 1st Terrace",
//     isAdmin: false,
//     shopCartId: 50
//   }]
// ).then(() => console.log('User data was created'))


