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
    return this.db.from("student").select();
  }

  get(id, params) {
    return this.db.from("student").where('usn', 'ilike',id).select();
  }

  create(data, params) {
        return this.db("student").insert(
            {
             usn:data["usn"],
             name:data["name"],
             adv_id:data["adv_id"],
             doa:data["doa"],
             dob:data["dob"],
             gender:data["gender"],
             dep_id:data["dep_id"],
             sec_id:data["sec_id"]
            }
        );
  }

  update(id, data, params) {
    this.db("student").where('usn','ilike',id)..update('name',data["name"]);
    this.db("student").where('usn','ilike',id)..update('adv_id',data["adv_id"]);
    this.db("student").where('usn','ilike',id)..update('doa',data["doa"]);
    this.db("student").where('usn','ilike',id)..update('dob',data["dob"]);
    this.db("student").where('usn','ilike',id)..update('gender',data["gender"]);
    this.db("student").where('usn','ilike',id)..update('dep_id',data["dep_id"]);
    this.db("student").where('usn','ilike',id)..update('sec_id',data["sec_id"]);
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
  app.use('/students', new Service());

  // Get our initialize service to that we can bind hooks
  const studentsService = app.service('students');

  // Set up our before hooks
  studentsService.before(hooks.before);

  // Set up our after hooks
  studentsService.after(hooks.after);
};

module.exports.Service = Service;
