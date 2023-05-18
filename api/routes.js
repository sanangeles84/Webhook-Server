'use strict';

var controller = require('./controller');

module.exports = function(app) {
   app.route('/')
       .get(controller.home);
   app.route('/about')
       .get(controller.about);
   app.route('/webhook')
       .post(controller.webhook);
   app.route('/webhookForge')
       .post(controller.webhookForge)
};