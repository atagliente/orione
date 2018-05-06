var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('dummy', { matches: '{store:\'Amazon\',' +
        '                            name:\'Dottrina Del Fascismo: Testo Originale\',' +
        '                            photoLink:\'https://images-eu.ssl-images-amazon.com/images/I/51TCHAbQ0WL._AC_US218_.jpg\',' +
        '                            link:\'https://www.amazon.it/Dottrina-Del-Fascismo-Testo-Originale/dp/1983805319/ref=sr_1_1?ie=UTF8&qid=1525607763&sr=8-1&keywords=Benito+Mussolini&dpID=51TCHAbQ0WL&preST=_SY264_BO1,204,203,200_QL40_&dpSrc=srch\',' +
        '                            price:\'5,99\'}' });
});

module.exports = router;