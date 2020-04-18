const express = require('express');
const router  = express.Router();
const vehicleModel = require('../models/vehicle.model')

/* GET home page */
router.get('/inventory', (req, res, next) => {
  

  vehicleModel.find()
              .then(allData => {
               res.render('../views/back-views/inventory-views/all-inventory');
              })



});

module.exports = router;
