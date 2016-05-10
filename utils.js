/**
 * Created by Rockie Yang on 10/05/16.
 */

var fs = require('fs');

//https://github.com/request/request
var request = require('request');

function downloadJenkins(dir, callback) {


    var jenkinsWar = dir + "jenkins.war";


     //var url = 'http://mirrors.jenkins-ci.org/war-stable/latest/jenkins.war';
    var url = 'http://mirrors.jenkins-ci.org/war/latest/jenkins.war';

    var stream = fs.createWriteStream(jenkinsWar)
    var r = request(url).pipe(stream);
    r.on('finish', function(){
        stream.close();
        callback(jenkinsWar);
    })

    //return jenkinsWar;
}


exports.downloadJenkins = downloadJenkins;
