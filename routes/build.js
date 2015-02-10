var express = require('express');
var bower = require('./utils/bower');
var router = express.Router();

function getComponents(query){
    var components = query.components && query.components.split(',')
    return components.map(function(component){
        return 'bskyb-' + component.replace('@','#');
    })
}

function saveComponents(components){
    bower.install(components)
        .then(function(){
            console.log(arguments)
        }).catch(function(){
            console.log(arguments)
        })
}

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})

router.get('/css', function(req, res) {
    var components = getComponents(req.query)
    var save = saveComponents(components)
    res.send(components);
})

router.get('/js', function(req, res) {
    res.send('js');
})

// define the about route
router.get('/', function(req, res) {
    res.send('help');
})
router.get('/help', function(req, res) {
    res.send('help');
})

module.exports = router;