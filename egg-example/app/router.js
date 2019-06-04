'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/homes', controller.home.homes);
  router.get('/Diocs', controller.home.Diocs);
};
