import React, {Component} from "react";

import { Mutation } from "react-apollo";

class LikeRecipe extends Component {

    state = {
        liked: false,
        username: ""
      };

      
    
    render () {

        const { liked, username } = this.state;
        return(
            <button>
                Like
            </button>

        )
    }


}

export default LikeRecipe