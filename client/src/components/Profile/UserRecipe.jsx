import React from "react";
import { Link } from "react-router-dom";
import { Query, Mutation } from "react-apollo";
import {
    GET_USER_RECIPES
  } from "../../queries";
  import Spinner from "../Spinner";


const UserRecipes = ({ username }) => (

    <Query query={GET_USER_RECIPES} variables={{ username }}>
    {({ data, loading, error }) => {
      if (loading) return <Spinner />;
      if (error) return <div>Error</div>;
      return (
        <ul>
          <h3>Your Recipes</h3>
          {!data.getUserRecipes.length && (
            <p>
              <strong>You have not added any recipes yet</strong>
            </p>
          )}
          {data.getUserRecipes.map(recipe => (
            <li key={recipe._id}>
              <Link to={`/recipes/${recipe._id}`}>
                <p>{recipe.name}</p>
              </Link>
              <p style={{ marginBottom: "0" }}>Likes: {recipe.likes}</p>
            </li>
          ))}
        </ul>
      );
    }}
 
 </Query>
)


export default UserRecipes;