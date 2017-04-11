'use strict';

const hooks = require('./hooks');
const conn_arr = {client:'pg',connection:'postgres://postgres@localhost/calender'}
const db = knex(conn_arr);
var pg = require('knex')({client: 'pg',connection:'postgres://postgres@localhost/calender'});

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return db.from("instructor").select();
  }

  get(id, params) {
    return Promise.resolve({
      id,db.from("instructor").where('in_id', 'ilike',id).select();
    });
  }

  create(data, params) {
     return Promise.all([
      function(){
        return pg("instructor").insert(
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
   
   get_all_classes(id){

    //all the classes that id=in_id is taking
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
  const instructorService = app.service('/instructors');

  // Set up our before hooks
  instructorService.before(hooks.before);

  // Set up our after hooks
  instructorService.after(hooks.after);
};

module.exports.Service = Service;
