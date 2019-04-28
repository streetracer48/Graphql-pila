import React from 'react';
import { Query } from "react-apollo";
import { GET_ALL_RECIPES } from "../queries/index";
import Spinner from "./Spinner";
import RecipeItem from "./../components/Recipe/RecipeItem";
const App = ()=> {
  return (
    <div className="App">
     <h1 className="main-title">
          Find Recipes You <strong>Love</strong>
        </h1>
        <Query query={GET_ALL_RECIPES}>

        { ({ data, loading, error }) =>{
          console.log(data)
          if(loading) return <Spinner/>;

          if (error) return <div>Error</div>;

          return (
            <div>
              
            {data.getAllRecipes.map(recipe => (
            <RecipeItem key={recipe._id} {...recipe} />
             ))} 
            </div>
                    
            );
        }}
        
        </Query>
Hello app 
    </div>
  );
}

export default App;
