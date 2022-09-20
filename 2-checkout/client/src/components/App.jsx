import React from 'react';
import axios from 'axios';
import User from './User.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      message: ''
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
    axios.post('/form', data)
      .then((message) => {
        alert(message.data);
        this.setState({
          clicked: false,
          message: message.data
        })
      });
  }

  handlePrev(e) {
    e.preventDefault();
    this.setState({
      clicked: false
    })
  }

  render() {
    return (
      <div>
        <p>Check Out Page</p>
        <div>
          <p>{this.state.message}</p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          <br/>
          {this.state.clicked ? <User submit={this.handleSubmit.bind(this)} prev={this.handlePrev.bind(this)} /> : <button onClick={this.handleClick.bind(this)}>Check Out</button>}
        </div>
      </div>
    )
  }
}

export default App;