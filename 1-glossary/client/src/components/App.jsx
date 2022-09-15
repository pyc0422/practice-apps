import React from 'react';
import Add from './Add.jsx';
import Search from './Search.jsx';
import WordsList from './WordsList.jsx';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      words: []
    }
  }

  add(word) {
    console.log(word, 'started add!');
    return axios.post('/add', word)
      .then(() => {
        this.update();
      })
  }

  search(key) {
    console.log(key, ' started search!');
    return axios.post('/search', {key})
      .then((res) => {
        console.log(res);
        if (typeof res.data === 'string') {
          alert(`Cannot find any word similar with ${key}`)
        } else {
          this.setState({
            words: res.data
          })
        }
      })
  }

  update() {
    return axios.get('/update')
      .then((res) => {
        this.setState({
          words: res.data
        })
      })
  }

  edit(before, after) {
    return axios.post('/edit', {before: before, after: after})
  }

  delete(word) {
    console.log('delete clicked!', word);
    return axios.delete('/delete', {data: word})
      .then(() => {
        return this.update();
      })
      .then(() => {
        alert(`Delete ${word.word} successful!`);
      })
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
            {this.state.words.map(word => <WordsList word={word} key={word._id} update={this.edit.bind(this)} delete={this.delete.bind(this)}/>)}
          </tbody>
        </table>

      </div>
    )

  }
}

export default App;