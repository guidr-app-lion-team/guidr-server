
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
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          username: 'Black Panther',
          password: 'pass',
          name: '',
          email: 'superhero@oops.com',
          location: 'Albuquerque, NM',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          username: 'Wolverine',
          password: 'pass',
          name: 'Logan',
          email: 'superhero@oops.com',
          location: 'New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          username: 'Batman',
          password: 'pass',
          name: 'Bruce Wayne',
          email: 'superhero@oops.com',
          location: 'Some cave',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          username: 'Superman',
          password: 'pass',
          name: 'Clark Kent',
          email: 'superhero@oops.com',
          location: 'Up up and Away',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
        {
          username: 'Aquaman',
          password: 'pass',
          name: 'Arthur Curry',
          email: 'superhero@oops.com',
          location: 'Ocean City',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum. ',
          professional: false,
        },
      ]);
    });
};
