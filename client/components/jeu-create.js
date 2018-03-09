import React from "react";
import {graphql} from "react-apollo";
import createJeuMutation from "../queries/createJeu";
import readJeuxQuery from "../queries/readJeux";
import {hashHistory} from "react-router";

class JeuCreate extends React.Component {

  constructor(props){
    super(props);
    this.state = {titre : "", style : "", description : "", errors:[]};
  }

  render(){
    return (
      <div>
        <h1>Ajouter un jeu vidéo</h1>
        <form className="col s6">
          <div>
            <label className="active">Renseignez le titre du jeu video</label>
            <input
              type="text"
              className="validate"
              onChange={e => this.setState({titre: e.target.value})}
            />
          </div>
          <div>
            <label className="active">Renseignez le style du jeu video</label>
            <input
              type="text"
              className="validate"
              onChange={e => this.setState({style: e.target.value})}
            />
          </div>
          <div>
            <label className="active">Petite description du jeu video</label>
            <input
              type="text"
              className="validate"
              onChange={e => this.setState({description: e.target.value})}
              onKeyPress={this.handleSubmitForm.bind(this)}
            />
          </div>
        </form>
        <div className="row errors">
          {this.renderErrors()}
        </div>
      </div>
    )
  }

  handleSubmitForm(e){
    if(e.key ==="Enter"){
      e.preventDefault();
      this.props.mutate({
        variables: {
          titre: this.state.titre,
          style: this.state.style,
          description: this.state.description
        },
        refetchQueries: [{query : readJeuxQuery}]
      }).then( () => {
        hashHistory.push("/jeux");
      }).catch( (errors) =>{
        const errorMessages = errors.graphQLErrors.map(err => err.message);
        this.setState({errors:errorMessages});
      })
    }
  }

  renderErrors (){
    return this.state.errors.map ( m => m)
  }
}
export default graphql(createJeuMutation)(JeuCreate);
