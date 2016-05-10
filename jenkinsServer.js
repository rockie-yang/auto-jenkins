/**
 * Created by Rockie Yang on 10/05/16.
 */

var child_process = require('child_process');

var jenkinsProcess = null;

function start(jenkinsWAR, port) {
    if (typeof port === 'undefined')
        port = 8080;

    // https://wiki.jenkins-ci.org/display/JENKINS/Starting+and+Accessing+Jenkins
    var cmd = 'java -jar ' + jenkinsWAR + ' --httpPort ' + port;
    var child = child_process.spawn('java', ['-jar', jenkinsWAR, '--httpPort='+port])
    //var child = child_process.spawn(cmd);

    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.stderr.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    child.on('error', (err) => {
        console.log('Failed to start child process.');
    });
    console.log(child.pid);

    jenkinsProcess = child;
}

function stop() {
    if (jenkinsProcess) {
        jenkinsProcess.kill();
    }
}

exports.start = start;
exports.stop = stop;
