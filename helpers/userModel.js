const db = require('../config/dbConfig');
const mappers = require('./mappers');

module.exports = {
  get: function (id) {
    let query = db('users as u');

    if (id) {
      query.where('u.id', id).first();

      const promises = [query, this.getUserAdventures(id)]; // [ users, adventures ]

      return Promise.all(promises).then(function (results) {
        let [user, adventures] = results;
        user.adventures = adventures;

        return mappers.userToBody(user);
      });
    }

    return query.then(users => {
      return users.map(user => mappers.userToBody(user));
    });
  },
  getUserAdventures: function (userId) {
    return db('adventures')
      .where('user_id', userId)
      .then(adventures => adventures.map(adventure => mappers.adventuresToBody(adventure)));
  },
  insert: function (user) {
    return db('users')
      .insert(user)
      .then(([id]) => this.get(id));
  },
  update: function (id, changes) {
    return db('users')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function (id) {
    return db('users')
      .where('id', id)
      .del();
  },
};
