#!/usr/bin/node

const request = require('request');
const options = {
  url: process.argv[2],
  method: 'GET',
  json: true
};
request(options, (error, response, body) => {
  if (error) console.log(error);
  let count = 0;
  body.results.forEach(function (data) {
    const len = data.characters.length;
    for (let i = 0; i < len; i++) {
      if (data.characters[i].includes('/18/')) count += 1;
    }
  });
  console.log(`${count}`);
});
