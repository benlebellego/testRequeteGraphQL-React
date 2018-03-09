const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const JeuType = require('./jeu_type');
const Jeu = mongoose.model('jeu');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    //récupérer tous les jeux video
    jeux: {
      type: new GraphQLList(JeuType),
      resolve() {
        return Jeu.find({});
      }
    },
    // retrouver un jeu video par son id
    jeu: {
      type: JeuType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Jeu.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
