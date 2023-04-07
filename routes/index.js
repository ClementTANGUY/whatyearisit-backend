var express = require('express');
var router = express.Router();

/* GET home page. */

let date = new Date();
let year = date.getUTCFullYear().toString();

router.get('/year', (req, res) => {
  res.json({ year:  year});
});

module.exports = router;
