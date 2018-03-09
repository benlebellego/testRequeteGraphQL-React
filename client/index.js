import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import JeuList from "./components/jeu-list";
import JeuCreate from "./components/jeu-create";
import JeuDetail from "./components/jeu-detail";
import {Router, Route, hashHistory, IndexRedirect} from "react-router";

const client = new ApolloClient ({});

const Root = () => {
  return (
  <div className="container">
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRedirect to="/jeux"/>
          <Route path="/jeux" component={JeuList}/>
          <Route path="/jeux/create" component={JeuCreate}/>
          <Route path="jeu/:id" component={JeuDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  </div>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
