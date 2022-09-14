import React from 'react';
import Add from './Add.jsx';
import Search from './Search.jsx';
import WordListEntry from './WordListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      words: []
    }
  }

  add(word) {
    console.log(word, 'started add!');
    return fetch("./add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    })
    .then(res => res.json())
    .then(() => {
      this.update();
    });
  }

  search(key) {
    console.log(key, ' started search!');
  }

  update() {
    return fetch('/update')
      .then(res => res.json())
      .then(json => {
        this.setState({
          words: json
        })
      });

  }
  componentDidMount() {
    console.log('update');
    this.update()
     .then(() => {
      console.log('finished');
     })
  }

  render() {
    return(
      <div>
        <Add add={this.add.bind(this)}/>
        <Search search={this.search.bind(this)}/>
        <h2>Exists Word and Definition: </h2>
        <table>
          <thead>
            <tr><th>Word</th><th>Definition</th><th>Options</th><th>CreateAt</th></tr>
          </thead>
          <tbody>
            {this.state.words.map(word => <WordListEntry word={word} key={word._id} />)}
          </tbody>
        </table>
      </div>
    )

  }
}

export default App;