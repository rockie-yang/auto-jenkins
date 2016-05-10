/**
 * Created by Rockie Yang on 10/05/16.
 */

var fs = require('fs');
var request = require('request');

var baseDir = './data/';

if (!fs.existsSync(baseDir)){
    fs.mkdirSync(baseDir);
}


var utils = require('./utils');
var jenkinsServer  = require('./jenkinsServer');

utils.downloadJenkins(baseDir, function(jenkinsWar) {
    jenkinsServer.start(jenkinsWar, 8081);
});

//jenkinsServer.stop();