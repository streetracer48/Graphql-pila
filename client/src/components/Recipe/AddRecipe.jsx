import React, {Component} from 'react'
import { Mutation } from "react-apollo";
import { ADD_RECIPE} from "../../queries";
const initialState = {
    name: "",
    imageUrl: "",
    instructions: "",
    category: "Breakfast",
    description: "",
    username: ""
  };
  


class AddRecipe extends Component {
    state = { ...initialState };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

     render() {
        const {
            name,
            imageUrl,
            category,
            description,
            instructions,
            username
          } = this.state;

         return(
<Mutation 
mutation={ADD_RECIPE}
variables={{
    name,
    imageUrl,
    category,
    description,
    instructions,
    username
  }}
>
    Hello add recipe
</Mutation>
         )
     }
}

export default AddRecipe


