const express = require("express");

const server = {
  /**
   * Express initialization
   * @returns {Promise} Promise with an initialized express
   */
  initExpress: () => {
    return new Promise(resolve => {
      resolve(express());
    });
  },
  /**
   * Expose main application port
   * @param {Object} app Pre-initialized Express app object
   */
  exposeMainPort: app => {
    app.listen(9999, () => {
      console.log(`Listening on port 9999!`);
    });
  }
};

server.initExpress().then(app => {
  server.exposeMainPort(app);
});
