const fs = require('fs');

const path = '../messages';

fs.readdir(path, (err, files) => {
    files.forEach(file => {
        console.log(path + '/' + file);
    });

});