import React,{ useState, useEffect } from 'react';
import Comfirm from './Comfirm.jsx';
const Card = (props) => {
  const [card, setCard] = useState('');
  const [expired, setExpired] = useState('');
  const [cvv, setCvv] = useState(0);
  const [billingZip, setBillingZip] = useState('');
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    let arr = expired.split('-');
    let month = parseInt(arr[1]);
    let year = parseInt(arr[0]);
    console.log(arr);
    if (!card.length || card.length < 10) {
      alert("Please enter valid Credit Card Number");
      setClicked(false);
    } else if (!expired.length || year < 2022 || (month < 9 && year === 2022)) {
      alert('Expried date should later then today!');
      setClicked(false);
    } else if (cvv < 100 || cvv.match(/\D/g) !== null) {
      alert('Please enter valid CVV');
      setClicked(false);
    } else if (!billingZip.length || billingZip.match(/\D/g) !== null) {
      alert('Please enter valid billing zip code!');
      setClicked(false);
    } else {
      let cardInfo = {
        card: card,
        expired: expired,
        cvv: cvv,
        billingZip: billingZip
      }
      return <Comfirm user={props.user} address={props.address} card={cardInfo} submit={props.submit}/>
    }

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
      </form>
    </div>

   )
}


export default Card;