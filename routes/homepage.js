const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/homepage');

router.get('/', homeCtrl.index);
router.get('/consulting', homeCtrl.consulting);



module.exports = router;