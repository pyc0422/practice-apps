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

  handleSubmit(data) {
    console.log('finnal data: ', data);
    axios.post('/', data)
      .then(() => {
        this.setState({
          clicked: false
        })
      });
  }

  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <div>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          <br/>
          {this.state.clicked ? <User submit={this.handleSubmit.bind(this)}/> : <button onClick={this.handleClick.bind(this)}>Check Out</button>}
        </div>
      </div>
    )
  }
}

export default App;