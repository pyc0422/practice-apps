import {React, useState} from 'react';

const Comfirm = (props) => {
  let data = {
    name: props.user.name,
    email: props.user.email,
    password: props.user.password,
    line: props.address.line1 + props.address.line2,
    city: props.address.city,
    state: props.address.state,
    zip: parseInt(props.address.zip),
    phone: parseInt(props.address.phone),
    card: props.card.card,
    expired: props.card.expired,
    cvv: parseInt(props.card.cvv),
    billingZip: parseInt(props.card.billingZip)
  }
  return (
    <div>
      <h2>Comfirm Your information</h2>
      <table>
        <tbody>
        {Object.keys(data).map((key, index) => {
          return <tr key={index}><th>{key}</th><td>{data[key]}</td></tr>
        })}
        </tbody>
        <tfoot><tr><td><button onClick={()=>{props.submit(data)}}>Purchase</button></td></tr></tfoot>
      </table>

    </div>


  )
}

export default Comfirm;