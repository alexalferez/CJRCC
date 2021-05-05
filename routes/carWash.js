const express = require('express');
const router = express.Router();
const washCtrl = require('../controllers/carWash');

router.get('/newConstcw',washCtrl.newConstcw);
router.get('/reloads', washCtrl.reloads);
router.get('/tunnelConver', washCtrl.tunnelConver);
router.get('/wallPanel', washCtrl.wallPanel);
router.get('/epoxyFloor', washCtrl.epoxyFloor);

module.exports = router;