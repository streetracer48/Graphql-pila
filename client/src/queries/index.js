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