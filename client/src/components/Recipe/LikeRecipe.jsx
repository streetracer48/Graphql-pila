import React, {Component} from "react";

import { Mutation } from "react-apollo";
import withSession from "../withSession";
class LikeRecipe extends Component {

    state = {
        liked: false,
        username: ""
      };

      
    
    render () {
console.log(this.props)
        const { liked, username } = this.state;
        const { _id } = this.props;
        return(
            <button>
                Like
            </button>

        )
    }


}

export default withSession(LikeRecipe)