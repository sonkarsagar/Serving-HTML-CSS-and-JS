const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
// /admin/contactus => GET
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});
// /admin/success => GET
router.get('/success', (req, res, next) => {
  res.send('<h1>FORM SUCCESSFULLY FILLED.<h1><h2>You can exit the window.<h2>');
});

module.exports = router;
