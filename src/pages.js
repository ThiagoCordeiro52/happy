const orphanages = require('./database/fakedata');

module.exports = {

  index(request, response) {
    return response.render('index');
  },

  orphanage(request, response) {
    return response.render('orphanage');
  },

  orphanages(request, response) {
    return response.render('orphanages', {
      orphanages
    });
  },

  createOrphanage(request, response) {
    return response.render('crate-orphanage');
  }
  

}