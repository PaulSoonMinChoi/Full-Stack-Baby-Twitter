import React from 'react';

class Links extends React.Component {
  constructor() {
    super();
    this.state = {
      signUp: false,
      username: '',
      password: '',
      actualUser: ''
    }
    this.signUp = this.signUp.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.signUpSwitchOn = this.signUpSwitchOn.bind(this);
    this.signUpSwitchOff = this.signUpSwitchOff.bind(this);
    this.plugInUser = this.plugInUser.bind(this);
  }

  signUpSwitchOn() {
    this.setState({
      signUp: true
    })
  }

  signUpSwitchOff() {
    this.setState({
      signUp: false
    })
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  plugInUser() {
    this.setState({
      actualUser: this.state.username
    })
  }

  signUp() {
    if (this.state.signUp === true) {
      return (
        <div className="form-box">
          <form className="form-container" onSubmit={(e) => e.preventDefault()}>
            <h1 className="form-header">WELCOME</h1>

            <label for="username"><b>UserName</b></label>
            <input name="username" type="text" required placeholder="Enter Username" value={this.state.username} onChange={this.changeHandler}></input>

            <label for="password"><b>Password</b></label>
            <input name="password" type="password" required placeholder="Enter Password" value={this.state.password} onChange={this.changeHandler}></input>

            <button className="btn" onClick={() => {this.props.postSignUp(this.state.username, this.state.password); this.plugInUser()}}>Submit</button>
            <button className="btn cancel" onClick={() => this.signUpSwitchOff()}>Close</button>
        </form>
        </div>
      )
    } else {
      <div></div>
    }
  }

  render() {
    return (
      <div>
        <ul className="links">
          <li>
            <a href="#" onClick={() => console.log('CLICKED ON USER')}
            >User: {this.state.actualUser}</a>
          </li>
          <li>
            <a href="#" onClick={() => console.log('CLICKED ON ABOUT')}
            >About</a>
          </li>
          <li>
            <a href="#" onClick={() => this.signUpSwitchOn()}>SignUp</a>
          </li>
          <li>
            <a href="#" onClick={() => console.log('CLICKED ON LOGIN')}
            >LogIn</a>
          </li>
        </ul>
        {this.signUp()}
      </div>
    )
  }
}

export default Links;





