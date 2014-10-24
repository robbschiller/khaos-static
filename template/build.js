'use strict'

var Metalsmith = require('metalsmith');

var metalsmith = Metalsmith(__dirname)
  .build(function(err){
    if (err) throw err;
  });
