'use strict';

var properties = require('../package.json');
var eventHandler = require('./eventHandler');
var eventHandlerForge = require('./eventHandlerForge');


var controllers = {
   home: function(req, res) {
        var home = {
           about: "Welcome"
       }
       res.json(home);
   },
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   webhook: function(req, res) {
      eventHandler.handler(req, res);
   },
   webhookForge: function(req, res) {
      eventHandlerForge.handler(req, res);
   }
};

module.exports = controllers;