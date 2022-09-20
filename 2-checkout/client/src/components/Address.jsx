import React, { useState } from 'react';
import Card from './Card.jsx';
import User from  './User.jsx';

const Address = (props) =>{
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setStates] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [clicked, setClicked] = useState(false);
  const [prev, setPrev] = useState(false);
  if (!clicked && !prev) {
    return (
      <div>
        <h2>Address</h2>
        <p>{JSON.stringify(props.user)}</p>
        <form>
          <label>Line1:
            <input type="text" onChange={(e) => setLine1(e.target.value)} value={line1}/>
          </label>
          <br/>
          <label>Line2:
            <input type="text" onChange={(e) => setLine2(e.target.value)} value={line2}/>
          </label>
          <br/>
          <label>City:
            <input type="text" onChange={(e) => setCity(e.target.value)} value={city}/>
          </label>
          <label>State:
            <input type="text" onChange={(e) => setStates(e.target.value)} value={state}/>
          </label>
          <label>Zip Code:
            <input type="text" onChange={(e) => setZip(e.target.value)} value={zip}/>
          </label>
          <br/>
          <label>Phone Number:
            <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}/>
          </label>
          <br/>
          <input type="button" onClick={() => {setPrev(true)}} value="Prev" />
          <input type="button" onClick={() => {setClicked(true)}} value="Next" />
        </form>
      </div>
    )
  } else if (clicked) {
    let address = {
      line1: line1,
      line2: line2,
      city: city,
      state: state,
      zip: zip,
      phone: phone
    }
    return <Card user={props.user} address={address} submit={props.submit}/>
  } else if (prev) {
    return <User user={props.user} />
  }

}
const List =(props) => {
  return (
    <div>
      {props.item}

    </div>
  )
}

export default Address;

