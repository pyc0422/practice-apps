import React from 'react';
import axios from 'axios';
import User from './User.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      clicked: true
    })
  }
  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <div>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          <br/>
          {this.state.clicked ? <User /> : <button onClick={this.handleClick.bind(this)}>Check Out</button>}
        </div>
      </div>
    )
  }
}

export default App;