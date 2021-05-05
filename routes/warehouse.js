const express = require('express');
const router = express.Router();
const wareCtrl = require('../controllers/warehouse');


router.get('/newConstwh', wareCtrl.newConstwh);
router.get('/cannabis', wareCtrl.cannabis);
router.get('/exposFloor', wareCtrl.exposFloor);


module.exports = router;