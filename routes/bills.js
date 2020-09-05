var express = require('express');
var router = express.Router();
var billService = require("./../services/bill.service");

/* GET bills page. */
router.get('/', function (req, res, next) {
  billService.getAllCb(req, res, (err, data) => {
    if (!!err)
      // res.json({ success: false, message: "error occurred", err: err });
      res.render('error', { message: "custom error message", error: err });
    else
      res.render('bills', { bills: data });
  })

});


/* POST bills page. */
router.post('/', function(req, res, next){
  billService.postCb(req, res, function(err, data){
    if (!!err)
      // res.json({ success: false, message: "error occurred", err: err });
      res.render('error', { message: "custom error message", error: err });
    else
      res.render('index');
  })
});




module.exports = router;
