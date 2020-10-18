module.exports = {
  friendlyName: 'Index',
  description: 'Index home.',
  inputs: {

  },
  exits: {

  },

  fn: async function (_, exits) {

    exits.success({message: 'Podie Sails API'});

  }
};
