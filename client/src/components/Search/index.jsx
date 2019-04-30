    
import React from "react";

import { ApolloConsumer } from "react-apollo";
import { SEARCH_RECIPES } from "../../queries";
class Search extends React.Component {
    state = {
      searchResults: []
    };
    handleChange = ({ searchRecipes }) => {
        console.log(searchRecipes)
        this.setState({
          searchResults: searchRecipes
        });
      };

    render () {
        const { searchResults } = this.state;
        return(
           <ApolloConsumer>
               { client => (
                   <div className="App">
                   <h2 className="main-title">Search for Recipes</h2>
                   <input
              type="search"
              className="search"
              placeholder="Search"
              onChange={async event => {
                event.persist();
                const { data } = await client.query({
                  query: SEARCH_RECIPES,
                  variables: { searchTerm: event.target.value }
                });
                this.handleChange(data);
              }}
            />
                   </div>
               )}
           </ApolloConsumer>
        )
    }

}

export default Search