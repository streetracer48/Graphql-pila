
import React, { Component } from 'react'

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

 class Signup extends Component {

    state = { ...initialState };

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
        // signupUser().then(async ({ data }) => {
        //   // console.log(data);
        //   localStorage.setItem("token", data.signupUser.token);
        //   await this.props.refetch();
        //   this.clearState();
        //   this.props.history.push("/");
        // });
      };

  render() {
const { username, email, password, passwordConfirmation } = this.state;

    return (
        <div className="App">
        <h2 className="App">Signup</h2>
            <form
                className="form"
                onSubmit={event => this.handleSubmit(event,)}
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
                //   disabled={loading || this.validateForm()}
                  className="button-primary"
                >
                  Submit
                </button>
                {/* {error && <Error error={error} />} */}
              </form>
        
      </div>
    )
  }
}

export default Signup