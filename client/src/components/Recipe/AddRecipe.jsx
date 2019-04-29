import React, {Component} from 'react'
import { Mutation } from "react-apollo";
import CKEditor from "react-ckeditor-component";
import { ADD_RECIPE, GET_ALL_RECIPES} from "../../queries";
import {withRouter} from 'react-router-dom'
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

      componentDidMount() {
          console.log(this.props.session.getCurrentUser.username)
        this.setState({
        username: !this.props.session.getCurrentUser.username?'':this.props.session.getCurrentUser.username
        });
      }
      handleSubmit = (event, addRecipe) => {
        event.preventDefault();
        addRecipe().then(({ data }) => {
          console.log(data);
        //   this.clearState();
         this.props.history.push("/");
        });
      };

      updateCache = (cache, { data: { addRecipe } }) => {
        const { getAllRecipes } = cache.readQuery({ query: GET_ALL_RECIPES });
    
        cache.writeQuery({
          query: GET_ALL_RECIPES,
          data: {
            getAllRecipes: [addRecipe, ...getAllRecipes]
          }
        });
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
  update={this.updateCache}
>
{(addRecipe, { data, loading, error }) => {
    return (
      <div className="App">
        <h2 className="main-title">Add Recipe</h2>
        <form
          className="form"
          onSubmit={event => this.handleSubmit(event, addRecipe)}
        >
          <label htmlFor="name">Recipe Name</label>
          <input
            type="text"
            name="name"
            placeholder="Add Name"
            onChange={this.handleChange}
            value={name}
          />
          <label htmlFor="imageUrl">Recipe Image</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Add Image URL"
            onChange={this.handleChange}
            value={imageUrl}
          />
          <label htmlFor="category">Category of Recipe</label>
          <select
            name="category"
            onChange={this.handleChange}
            value={category}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
          <label htmlFor="description">Recipe Description</label>
          <input
            type="text"
            name="description"
            placeholder="Add Description"
            onChange={this.handleChange}
            value={description}
          />
          <label htmlFor="instructions">Recipe Instructions</label>
          {/* <CKEditor
            name="instructions"
            content={instructions}
            events={{ change: this.handleEditorChange }}
          /> */}
          <textarea
            name="instructions"
            placeholder="Add instructions"
            onChange={this.handleChange}
            value={instructions}
          />
          <button
// nam            disabled={loading || this.validateForm()}
            type="submit"
            className="button-primary"
          >
            Submit
          </button>
          {/* {error && <Error error={error} />} */}
        </form>
      </div>
    );
  }}
</Mutation>
         )
     }
}

export default withRouter(AddRecipe)


