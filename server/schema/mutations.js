const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Jeu = mongoose.model('jeu');
const JeuType = require('./jeu_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //ajout d'un jeu video
    addJeu: {
      type: JeuType,
      args: {
        titre: { type: GraphQLString },
        style: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, { titre, style, description }) {
        return (new Jeu({ titre, style, description })).save()
      }
    },
    deleteJeu: {
      // supprimer un jeu video par son id
      type: JeuType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Jeu.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
