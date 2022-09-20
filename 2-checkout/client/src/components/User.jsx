import { React, useState } from 'react';
import Address from './Address.jsx';
const User = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPw] = useState('');
  const [clicked, setClicked] = useState(false);
  if (!clicked) {
    return (
      <div >
        <h2>
          Sign Up
        </h2>
        <form>
          <label>Name:
            <input minLength="1" maxLength="10" onChange={(e) => setName(e.target.value)} type="text" value={name}></input>
          </label>
          <br/>
          <label>E-mail:
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </label>
          <br/>
          <label>Password:
            <input id="password" value={password} onChange={(e) => setPw(e.target.value)} type="password" />
          </label>
          <br/>
          <input type="button" onClick={props.prev} value="Prev" />
          <input type="button" onClick={() => setClicked(true)} value="Next" />
        </form>
      </div>
    )
  } else {
    if (!name.length) {
      alert('Please Enter username!');
      setClicked(false);
    } else if (!email.length || email.indexOf('@') === -1) {
      alert('Please enter valid email!');
      setClicked(false);
    } else if (!password.length) {
      alert('Please enter valid Password!');
      setClicked(false);
    } else {
      let user={
        name: name,
        email, email,
        password, password
      };
      return <Address user={user} submit={props.submit} />
    }

  }

}


export default User;