import React, {Component} from 'react'

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

     render() {
         return(
<div>
    Hello add recipe
</div>
         )
     }
}

export default AddRecipe


