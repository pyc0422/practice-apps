import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card:'',
      month:'',
      year:'',
      cvv:'',
      billing_zip:''
    }

  }

  render() {
   return (
    <form>
      <label>Credit Care Number:
        <input type="text" id='card' value={this.state.card}/>
      </label>
      <br/>
      <label>Expiry Date:
        <input type="month"/>
      </label>
      <label>CVV:
        <input type="text" id='card' value={this.state.cvv}/>
      </label>
      <br/>
      <label>Billing Zip Code:
        <input type="text" id='card' value={this.state.billing_zip}/>
      </label>
      <br/>
      <input type="button" value="Next"/>
      {this.props.user}
      {this.props.address}
    </form>
   )
  }
}
export default Card;