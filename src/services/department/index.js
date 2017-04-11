'use strict';

const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return db.from("department").select();
  }

  get(id, params) {
    return Promise.resolve({
      id,db.from("department").where('dep_id', 'ilike',id).select();
    });
  }

  create(data, params) {
    return Promise.all([
      function(){
        return pg("department").insert(
            {
             dep_id:data["dep_id"],
             dep_name:data["dep_name"]
            }
        );
      }
    ]);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/departments', new Service());

  // Get our initialize service to that we can bind hooks
  const departmentService = app.service('/departments');

  // Set up our before hooks
  departmentService.before(hooks.before);

  // Set up our after hooks
  departmentService.after(hooks.after);
};

module.exports.Service = Service;
