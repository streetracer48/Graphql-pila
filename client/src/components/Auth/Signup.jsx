
import React, { Component } from 'react'

 class Signup extends Component {
  render() {
    return (
        <div className="App">
        <h2 className="App">Signup</h2>
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