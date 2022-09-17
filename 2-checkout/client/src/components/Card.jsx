import React,{ useState, useEffect } from 'react';
import Comfirm from './Comfirm.jsx';
const Card = (props) => {
  const [card, setCard] = useState(0);
  const [expired, setExpired] = useState('');
  const [cvv, setCvv] = useState(0);
  const [billingZip, setBillingZip] = useState(0);
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    let cardInfo = {
      card: card,
      expired: expired,
      cvv: cvv,
      billingZip: billingZip
    }
    return <Comfirm user={props.user} address={props.address} card={cardInfo} submit={props.submit}/>
  }
  return (
    <div>
      <h2>Credit Card</h2>
      <form>
        <label>Credit Care Number:
          <input type="text" onChange={(e) => setCard(e.target.value)} value={card}/>
        </label>
        <br/>
        <label>Expired Date:
          <input onChange={(e) => setExpired(e.target.value)} type="month"/>
        </label>
        <label>CVV:
          <input type="text" onChange={(e) => setCvv(e.target.value)} value={cvv}/>
        </label>
        <br/>
        <label>Billing Zip Code:
          <input type="text" onChange={(e) => setBillingZip(e.target.value)} value={billingZip}/>
        </label>
        <br/>
        <input type="button" onClick={() => setClicked(true)} value="Next"/>
        {JSON.stringify(props.user)}
        {JSON.stringify(props.address)}
      </form>
    </div>

   )
}


export default Card;