const Home = require('../models/home')

module.exports = {
    newConstres,
    remodelsRes,
    adus,
};


function newConstres(req,res) {
    res.render('residential/newConstres')
}

function remodelsRes (req,res) {
    res.render('residential/remodelsRes')
}

function adus (req,res) {
    res.render('residential/adus')
}
