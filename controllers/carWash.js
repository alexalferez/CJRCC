const Home = require('../models/home')

module.exports = {
    newConstcw,
    reloads,
    tunnelConver,
    wallPanel,
    epoxyFloor,
};



function newConstcw(req,res) {
    res.render('carWash/newConstcw')
}

function reloads(req,res) {
    res.render('carWash/reloads')
}

function tunnelConver(req,res) {
    res.render('carWash/tunnelConver')
}

function wallPanel(req,res) {
    res.render('carWash/wallPanel')
}

function epoxyFloor(req,res) {
    res.render('carWash/epoxyFloor')
}