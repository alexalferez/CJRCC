const Home = require('../models/home')

module.exports = {
    index,
    consulting,
};

function index(req,res) {
    Home.find({}, function(err, home) {
        res.render('homepage/index');
    });
}


function consulting (req,res) {
    res.render('homepage/consulting');
}
