import React, {Component} from 'react'
import { Mutation } from "react-apollo";
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
         return(
<div>
    Hello add recipe
</div>
         )
     }
}

export default AddRecipe


