#!/usr/bin/node

const request = require('request');
const options = {
  url: process.argv[2]
};
request(options, (error, response, body) => {
  if (error) console.log(error);
  const obj = JSON.parse(body);
  const json = {};
  obj.forEach((ob) => {
    if (ob.completed && json[ob.userId] === undefined) {
      json[ob.userId] = 1;
    } else if (ob.completed) {
      json[ob.userId] += 1;
    }
  });
  console.log(json);
});
