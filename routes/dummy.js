var express = require('express'),
    http = require('http'),
    url = require('url'),
    util = require('util'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var qs = url.parse( req.url, true );
    var productName = qs.query.product;
    if(productName == null || productName.toString().trim() === '') {
        res.render('dummy', { matches: "Bad request made by terun!"});
    } else {
        res.render('dummy', { matches: '{store:\'Amazon\',' +
            '                            name:\'Dottrina Del Fascismo: Testo Originale\',' +
            '                            photoLink:\'https://images-eu.ssl-images-amazon.com/images/I/51TCHAbQ0WL._AC_US218_.jpg\',' +
            '                            link:\'https://www.amazon.it/Dottrina-Del-Fascismo-Testo-Originale/dp/1983805319/ref=sr_1_1?ie=UTF8&qid=1525607763&sr=8-1&keywords=Benito+Mussolini&dpID=51TCHAbQ0WL&preST=_SY264_BO1,204,203,200_QL40_&dpSrc=srch\',' +
            '                            price:\'5,99\'}' });
    }
});

module.exports = router;