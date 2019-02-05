
exports.seed = function (knex, Promise) {
  const hashPassword = require('../helpers/hashPassword');
  const hash = hashPassword('pass');
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Iron Man',
          password: hash,
          name: 'Tony Stark',
          email: 'man@drycleaners.com',
          location: 'Stark Tower',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          id: 2,
          username: 'Black Panther',
          password: hash,
          name: 'TChalla',
          email: 'superhero@oops.com',
          location: 'Albuquerque, NM',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          id: 3,
          username: 'Wolverine',
          password: hash,
          name: 'Logan',
          email: 'superhero@oops.com',
          location: 'New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          id: 4,
          username: 'Batman',
          password: hash,
          name: 'Bruce Wayne',
          email: 'superhero@oops.com',
          location: 'Some cave',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          id: 5,
          username: 'Superman',
          password: hash,
          name: 'Clark Kent',
          email: 'superhero@oops.com',
          location: 'Up up and Away',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          id: 6,
          username: 'Aquaman',
          password: hash,
          name: 'Arthur Curry',
          email: 'superhero@oops.com',
          location: 'Ocean City',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
      ]);
    });
};
