
import React, { Component } from 'react'
import {Mutation} from "react-apollo";
import {SIGNUP_USER } from "../../queries";
import Error from "../utlis/Errors"
import {withRouter} from 'react-router-dom'
const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

 class Signup extends Component {

    state = { ...initialState };
    clearState = () => {
        this.setState({ ...initialState });
      };    

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

      validateForm = () => {
        const { username, email, password, passwordConfirmation } = this.state;
        const isInvalid =
          !username || !email || !password || password !== passwordConfirmation;
        return isInvalid;
      }

      handleSubmit = (event, signupUser) => {
        event.preventDefault();
        console.log(this.state)
        signupUser().then(async ({ data }) => {
          console.log(data);
       localStorage.setItem("token", data.signupUser.token);
        //   await this.props.refetch();
         this.clearState();
           this.props.history.push("/");
        });
      };

  render() {
const { username, email, password, passwordConfirmation } = this.state;

    return (
        <div className="App">
        <h2 className="App">Signup</h2>
<Mutation mutation={SIGNUP_USER} variables={{username, email, password}}>

{(signupUser, {data, loading, error}) => {
     return (
        <form
        className="form"
        onSubmit={event => this.handleSubmit(event, signupUser)}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          disabled={this.validateForm()}
          className="button-primary"
        >
          Submit
        </button>
        {error && <Error error={error} />}
      </form>
     )
}}

           
              </Mutation>
      </div>
    )
  }
}

export default withRouter(Signup)