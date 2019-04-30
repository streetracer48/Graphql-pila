import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './components/App.css';
import withSession from "./components/withSession";
import SignIn from './components/Auth/signIn';
import SignUp from './components/Auth/Signup';
import Navbar from "./components/Navbar";
import RecipeDetails from "./components/Recipe/RecipeDetails";
import Search from "./components/Search/"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddRecipe from "./components/Recipe/AddRecipe";
const client = new ApolloClient({
    uri:"http://localhost:4444/graphql",
    fetchOptions:{
        credentials: "include"
    },

    request: operation => {
      const token = localStorage.getItem("token");
      operation.setContext({
        headers: {
          authorization: token
        }
      });
    },
    onError: ({ networkError }) => {
      if (networkError) {
        localStorage.setItem("token", "");
      }
    }
})

const Root = ({ refetch, session }) => (
    <Router>
      <Fragment>
      <Navbar session={session} />
        <Switch>
          <Route  path="/" exact component={App} />
          <Route  path="/login"  render={() => <SignIn refetch={refetch} />}/>
          <Route  path="/register" render={() => <SignUp refetch={refetch} />} />
          <Route
          path="/recipe/add"
          render={() => <AddRecipe session={session} />}
        />
          <Route path="/recipes/:_id" component={RecipeDetails} />
          <Route path="/search" component={Search} />
        </Switch>
      </Fragment>
    </Router>
  );

  const RootWithSession = withSession(Root);
  

ReactDOM.render(

<ApolloProvider client={client}>
<RootWithSession />
</ApolloProvider>
,document.getElementById('root'));


