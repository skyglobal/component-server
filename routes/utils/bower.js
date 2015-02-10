var Promise = require('es6-promise').Promise;
var findup = require('findup-sync');
var bower = require('bower');
var inquirer =  require('inquirer');

function install(args, opts){
    return new Promise(function(resolve, reject){
        var exec = bower.commands.install(args, opts);
        exec.on('end', resolve);
        exec.on('error', reject);
        exec.on('prompt', function (prompts, callback) {
            inquirer.prompt(prompts, callback);
        })
    })
}

function register(){
    var pkg = require(findup('./package.json'));
    var bowerPkg = require(findup('./bower.json'));
    return new Promise(function(resolve, reject){
        var exec = bower.commands.register(bowerPkg.name, pkg.repository.url);
        exec.on('end', resolve);
        exec.on('error', reject);
    })
}

module.exports = {
    register : register,
    install : install
};