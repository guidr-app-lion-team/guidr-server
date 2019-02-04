
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Iron Man',
          password: 'pass',
          name: 'Tony Stark',
          email: 'man@drycleaners.com',
          location: 'Stark Tower',
          bio: '',
          professional: false,
        },
        {
          username: 'Black Panther',
          password: 'pass',
          name: '',
          email: '',
          location: '',
          bio: '',
          professional: false,
        },
        {
          username: 'Wolverine',
          password: 'pass',
          name: '',
          email: '',
          location: '',
          bio: '',
          professional: false,
        },
        {
          username: 'Batman',
          password: 'pass',
          name: '',
          email: '',
          location: '',
          bio: '',
          professional: false,
        },
        {
          username: 'Superman',
          password: 'pass',
          name: '',
          email: '',
          location: '',
          bio: '',
          professional: false,
        },
        {
          username: 'Aquaman',
          password: 'pass',
          name: '',
          email: '',
          location: '',
          bio: '',
          professional: false,
        },
      ]);
    });
};
