const Home = require('../models/home')

module.exports = {
    newConstruction,
    remodels,
	garageConversions,
	fueling,
	paving,
};


function newConstruction(req,res) {
    res.render('gasStations/newConstruction')
}

function remodels(req,res) {
    res.render('gasStations/remodels')
}

function garageConversions(req,res) {
    res.render('gasStations/garageConversions')
}

function fueling(req,res) {
    res.render('gasStations/fueling')
}

function paving(req,res) {
    res.render('gasStations/paving')
}