import React, {Component} from "react";

import { Mutation } from "react-apollo";
import withSession from "../withSession";
import { LIKE_RECIPE} from "../../queries";
class LikeRecipe extends Component {

    state = {
        liked: false,
        username: ""
      };

      componentDidMount() {
        if (this.props.session.getCurrentUser) {
          const { username, favorites } = this.props.session.getCurrentUser;
          this.setState({
              username,
              favorites
          })
        }
      }
      
      handleClick = (likeRecipe) => {
      likeRecipe().then(({ data}) => {
console.log(data)
      })
      };
    
    render () {
        const { liked, username } = this.state;
        const { _id } = this.props;

        return (
            <Mutation
              mutation={LIKE_RECIPE}
              variables={{ _id, username }}
            //   update={this.updateUnlike}
            >
                  {likeRecipe =>
                    username && (
                      <button
                        className="like-button"
                        onClick={() => this.handleClick(likeRecipe)}
                      >
                       Like
                      </button>
                    )
                  }
            </Mutation>
          );
    }
}

export default withSession(LikeRecipe)