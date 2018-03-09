import React from 'react';
import readJeuQuery from "../queries/readJeu";
import {graphql, compose} from "react-apollo";
import {Link} from "react-router";

class JeuDetail extends React.Component {
  render() {
    if(this.props.readJeuQuery.loading){
      return<div>Chargement...</div>
    }
    return (
      <div>
        <h1>{this.props.readJeuQuery.jeu.titre}</h1>
        <h3>Style : {this.props.readJeuQuery.jeu.style}</h3>
        <p>{this.props.readJeuQuery.jeu.description}</p>
        <Link to="/jeux">Retour à la liste des jeux</Link>
      </div>
    )
  }
}

export default compose(
  graphql(readJeuQuery,{
    name:"readJeuQuery",
    options: (props) => {
      return {
        variables : {
          id : props.params.id
        }
      }
    }
  }),
)(JeuDetail);
