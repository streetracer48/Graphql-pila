    
import React from "react";

import { ApolloConsumer } from "react-apollo";

class Search extends React.Component {
    state = {
      searchResults: []
    };

    render () {
        const { searchResults } = this.state;
        return(
            <div>
         Search Component
            </div>
        )
    }

}

export default Search