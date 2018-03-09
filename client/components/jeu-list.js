import React from "react";
import { graphql, compose } from "react-apollo";
import { Link } from "react-router";
import readJeuxQuery from "../queries/readJeux";
import deleteJeuMutation from "../queries/deleteJeu";

class JeuList extends React.Component {

  render() {
    return (
      <div>
        <h1>Liste de jeux videos</h1>
        <ul className="collection">
          {this.renderJeux()}
        </ul>
        <Link to="/jeux/create" className="btn-floating btn-large waves-effect waves-light blue right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }

  renderJeux(){
    if(!this.props.readJeuxQuery.loading){
      return this.props.readJeuxQuery.jeux.map( (jeu) => {
        return (
          <li className="collection-item" key={jeu.id}>
            <Link to={`/jeu/${jeu.id}`}>{jeu.titre}</Link>
            <p className="info-jeu">{jeu.style}</p>
            <i className="material-icons secondary-content delete_button" onClick={() => this.onDeleteJeu(jeu.id)} >delete</i>
        </li>
      );
      })
    }else {
      return "Chargement des données...";
    }
  }
  onDeleteJeu(id){
    this.props.deleteJeuMutation({
      variables:{
        id
      }
    }).then( ()=>{
      this.props.readJeuxQuery.refetch();
    })
  }
}
export default compose(
  graphql(readJeuxQuery,{
    name:"readJeuxQuery"
  }),
  graphql(deleteJeuMutation,{
    name:"deleteJeuMutation"
  })
)(JeuList);
