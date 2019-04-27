import { gql } from "apollo-boost";


/* Recipes Queries */
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      imageUrl
      name
      category
    }
  }

`;

 /* User Mutations */

 export const SIGNIN_USER = gql`
 mutation($username: String!, $password: String!) {
   signinUser(username: $username, password: $password) {
     token
   }
 }
 `;