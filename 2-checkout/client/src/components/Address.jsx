import React from 'react';
import Card from './Card.jsx';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: 0,
      phone:0,
      clicked: false
    }
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
  render(){
    if (this.state.clicked) {
      let address = {
        line1: this.state.line1,
        line2: this.state.line2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone:this.state.phone
      }
      return <Card user={this.props.user} address={address}/>
    } else {
      return (
        <form>
          <label>Line1:
            <input type="text" id='line1' value={this.state.line1}/>
          </label>
          <br/>
          <label>Line2:
            <input type="text" id='line2' value={this.state.line2}/>
          </label>
          <br/>
          <label>City:
            <input type="text" id='city' value={this.state.city}/>
          </label>
          <label>State:
            <input type="text" id='state' value={this.state.state}/>
          </label>
          <label>Zip Code:
            <input type="text" id='zip' value={this.state.zip}/>
          </label>
          <br/>
          <label>Phone Number:
            <input type="text" id='phone' value={this.state.phone}/>
          </label>
          <br/>
          <input type="button" value="Next" />
        </form>
      )
    }
  }
}

export default Address;

