#!/usr/bin/node

const request = require('request');
const options = {
  url: process.argv[2],
  method: 'GET'
};

request(options, (error, response, body) => {
  if (error) console.log(error);
  console.log(`code: ${response.statusCode}`);
});
