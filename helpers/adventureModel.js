const db = require('../config/dbConfig');
const mappers = require('./mappers');

module.exports = {
  get: function (id) {
    let query = db('adventures');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(adventure => mappers.adventureToBody(adventure)); // s
    }

    return query.then(adventures => {
      return adventures.map(adventure => mappers.adventureToBody(adventure)); //s
    });
  },
  insert: function (adventure) {
    return db('adventures')
      .insert(adventure)
      .then(([id]) => this.get(id));
  },
  update: function (id, changes) {
    return db('adventures')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function (id) {
    return db('adventures')
      .where('id', id)
      .del();
  },
};
