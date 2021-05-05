const express = require('express');
const router = express.Router();
const gasCtrl = require('../controllers/gasStations');

router.get('/newConstruction', gasCtrl.newConstruction);
router.get('/remodels', gasCtrl.remodels);
router.get('/garageConversions', gasCtrl.garageConversions);
router.get('/fueling', gasCtrl.fueling);
router.get('/paving', gasCtrl.paving);

module.exports = router;