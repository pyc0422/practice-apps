import React from 'react';
import Address from './Address.jsx';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      clicked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    let id = e.target.id;
    if (id === 'name') {
      this.setState({
        name: value
      })
    } else if (id === 'email') {
      this.setState({
        email: value
      })
    } else if (id === 'password') {
      this.setState({
        password: value
      })
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      clicked: true
    })
  }
  render() {
    if (this.state.clicked) {
      let user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
      return <Address user={user}/>
    } else {
      return (
        <div >
          <h2>
            Sign Up
          </h2>
          <form>
            <label>Name:
              <input id="name" value={this.state.name} onChange={this.handleChange} type="text"></input>
            </label>
            <br/>
            <label>E-mail:
              <input id="email" value={this.state.email} onChange={this.handleChange} type="email" />
            </label>
            <br/>
            <label>Password:
              <input id="password" value={this.state.password} onChange={this.handleChange} type="password" />
            </label>
            <br/>
            <input type="button" onClick={this.handleClick.bind(this)}value="Next" />
          </form>
        </div>

      )
    }

  }

}

export default User;