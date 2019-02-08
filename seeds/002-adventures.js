
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('adventures').del()
    .then(function () {
      // Inserts seed entries
      return knex('adventures').insert([
        {
          user_id: 1,
          adventure_type: 'Hiking',
          title: 'A Long-expected Party',
          location: 'The Moon',
          duration: '3 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 2,
          adventure_type: 'Back Packing',
          title: 'The Shadow of the Past',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 3,
          adventure_type: 'Rock Climbing',
          title: 'Three is Company',
          location: 'The Moon',
          duration: '6 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 4,
          adventure_type: 'Cycling',
          title: 'A Short Cut to Mushrooms',
          location: 'The Moon',
          duration: '2 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 5,
          adventure_type: 'Scuba Diving',
          title: 'A Conspiracy Unmasked',
          location: 'The Moon',
          duration: '1 hour',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 6,
          adventure_type: 'Back Packing',
          title: 'The Old Forest',
          location: 'The Moon',
          duration: '10 days',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 1,
          adventure_type: 'Hiking',
          title: 'In the House of Tom Bombadil',
          location: 'The Moon',
          duration: '3 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 2,
          adventure_type: 'Back Packing',
          title: 'Fog on the Barrow-downs',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 3,
          adventure_type: 'Rock Climbing',
          title: 'At the sign of the Prancing Pony',
          location: 'The Moon',
          duration: '6 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 4,
          adventure_type: 'Cycling',
          title: 'Strider',
          location: 'The Moon',
          duration: '2 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 5,
          adventure_type: 'Scuba Diving',
          title: 'A Knife in the Dark',
          location: 'The Moon',
          duration: '1 hour',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 6,
          adventure_type: 'Back Packing',
          title: 'Flight to the Ford',
          location: 'The Moon',
          duration: '10 days',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 1,
          adventure_type: 'Hiking',
          title: 'The Departure of Boromir',
          location: 'The Moon',
          duration: '3 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 2,
          adventure_type: 'Back Packing',
          title: 'The Riders of Rohan',
          location: 'The Moon',
          duration: '2 weeks',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 3,
          adventure_type: 'Rock Climbing',
          title: 'The Urak-hai',
          location: 'The Moon',
          duration: '6 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 4,
          adventure_type: 'Cycling',
          title: 'Treebeard',
          location: 'The Moon',
          duration: '2 hours',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 5,
          adventure_type: 'Scuba Diving',
          title: 'The White Rider',
          location: 'The Moon',
          duration: '1 hour',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
        {
          user_id: 6,
          adventure_type: 'Back Packing',
          title: 'The King of the Golden Hall',
          location: 'The Moon',
          duration: '10 days',
          description: 'Nothing happened that night worse than a brief drizzle of rain an hour before dawn. As soon as it was fully light they started. Already the fog was thinning. They kept as close as they could to the western side, and they could see the dim shapes of the low cliffs rising ever higher, shadowy walls with their feet in the hurrying river. In the mid-morning the clouds drew down lower, and it began to rain heavily. They drew the skin-covers over their boats to prevent them from being flooded, and drifted on: little could be seen before them or about them through the grey falling curtains.',
          professional: false,
          date: 'February 3rd 2019'
        },
      ]);
    });
};
