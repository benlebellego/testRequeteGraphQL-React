const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Jeu = mongoose.model('jeu');

const JeuType = new GraphQLObjectType({
  name:  'JeuType',
  fields: () => ({
    id: { type: GraphQLID },
    titre: { type: GraphQLString },
    style: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = JeuType;
