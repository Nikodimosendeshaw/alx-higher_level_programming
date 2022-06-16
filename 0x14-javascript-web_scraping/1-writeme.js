#!/usr/bin/node

const fs = require('fs');
/*
script that writes a string to a file
process.argv[2] => file path
process.argv[3] => string to write
*/

fs.writeFile(process.argv[2], process.argv[3], 'utf-8', err => {
  if (err) {
    console.error(err);
  }
});
