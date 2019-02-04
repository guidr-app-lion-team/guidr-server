
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adventures').del()
    .then(function () {
      // Inserts seed entries
      return knex('adventures').insert([
        {
          user_id: 1, 
          adventure_type: 'Hiking',
          title: 'Back street boys',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'blah blah blah',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 2,
          adventure_type: 'Back Packing',
          title: 'What evs',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'blah blah blah',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 3,
          adventure_type: 'Back Packing',
          title: 'What evs',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'blah blah blah',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 4,
          adventure_type: 'Back Packing',
          title: 'What evs',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'blah blah blah',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 5,
          adventure_type: 'Back Packing',
          title: 'What evs',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'blah blah blah',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 6,
          adventure_type: 'Back Packing',
          title: 'What evs',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'blah blah blah',
          professional: false,
          date: 'February 3rd 2019'
        },
      ]);
    });
};
