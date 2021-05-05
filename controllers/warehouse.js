const Home = require('../models/home')

module.exports = {
    newConstwh,
    cannabis,
    exposFloor,
};

function newConstwh (req,res) {
    res.render('warehouse/newConstwh')
}

function cannabis (req,res) {
    res.render('warehouse/cannabis')
}

function exposFloor (req,res) {
    res.render('warehouse/exposFloor')
}