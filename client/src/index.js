import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri:"http://localhost:4444/graphql",
    fetchOptions:{
        credentials: "include"
    }
})

const Root = ({ refetch, session }) => (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </Fragment>
    </Router>
  );
  

ReactDOM.render(

<ApolloProvider client={client}>
<App />
</ApolloProvider>
,document.getElementById('root'));


