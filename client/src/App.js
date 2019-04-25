import React from 'react';
import { Query } from "react-apollo";

import { GET_ALL_RECIPES } from "./queries";
function App() {
  return (
    <div className="App">
      <Query query={GET_ALL_RECIPES}>
          {({ data, loading, error }) => {
            if (loading) return loading;
            if (error) return <div>Error</div>;
            // console.log(data);
            console.log(data)
            ;
          }}
        </Query>
    </div>
  );
}

export default App;
