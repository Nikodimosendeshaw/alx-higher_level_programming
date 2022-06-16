#!/usr/bin/node
const request = require('request');
const options = {
  url: process.argv[2],
  method: 'GET'
};
const fs = require('fs');
request(options, (error, response, body) => {
  if (error) console.log(error);
  fs.writeFile(process.argv[3], body, 'utf-8', err => {
    if (err) {
      console.log(err);
    }
  });
});
