'use strict';

const hooks = require('./hooks');
var conn_arr = {client:'pg',connection:'postgres://postgres@localhost/calender'}
//var db = knex(conn_arr);

class Service {
  constructor(options) {
    this.options = options || {};
    this.db = require('knex')({client: 'pg',connection:'postgres://postgres@localhost/calender'});

  }

  find(params) {
    return this.db.from("instructor").select();
  }

  get(id, params) {
    return this.db.from("instructor").where('in_id', 'ilike',id).select();
  }

  create(data, params) {
     return Promise.all([
      function(){
        return this.db("instructor").insert(
            {
             in_id:data["in_id"],
             gender:data["gender"],
             name:data["name"],
             doj:data["doj"],
             dep_id:data["dep_id"],
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
  app.use('/instructors', new Service());

  // Get our initialize service to that we can bind hooks
  const instructorsService = app.service('/instructors');

  // Set up our before hooks
  instructorsService.before(hooks.before);

  // Set up our after hooks
  instructorsService.after(hooks.after);
};

module.exports.Service = Service;
