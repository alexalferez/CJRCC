const express = require('express');
const router = express.Router();
const resCtrl = require('../controllers/residential');


router.get('/newConstres', resCtrl.newConstres);
router.get('/remodelsRes', resCtrl.remodelsRes);
router.get('/adus', resCtrl.adus);

module.exports = router;