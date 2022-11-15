const {getAllClients, postClients, deleteFromClients, upgradeClients} = require('./clients');
const {getAllCredit, postCredit, deleteFromCredit, upgradeCredit} = require('./credit');
const {getAllInvest, postInvest, deleteFromInvest, upgradeInvest} = require('./invest');


const resolvers = {
    clients: (args) => {
      return getAllClients(args);
    },

    credit: (args) => {
      return getAllCredit(args);
    },

    invest: (args) => {
      return getAllInvest(args);
    },



    createCredit: (args) => {
      const {
        creditInput
      } = args;
      return postCredit(creditInput);
    },

    deleteCredit: (args) => {
      return deleteFromCredit(args);
    },

    updateCredit: (args) => {
      const {
        creditInput
      } = args;
      return upgradeCredit(creditInput);
    },



    createClients: (args) => {
      const {
        clientsInput
      } = args;
      return postClients(clientsInput);
    },

    deleteClients: (args) => {
      return deleteFromClients(args);
    },

    updateClients: (args) => {
      const {
        clientsInput
      } = args;
      return upgradeClients(clientsInput);
    },



    createInvest: (args) => {
      const {
        investInput
      } = args;
      return postInvest(investInput);
    },
    deleteInvest: (args) => {
      return deleteFromInvest(args);
    }, 
    updateInvest: (args) => {
      const {
        investInput
      } = args;
      return upgradeInvest(investInput);
    }
};

module.exports = resolvers;