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

  edit(e) {
   console.log('edit clicked!', e.target.value);
  }

  delete(e) {
    console.log('delete clicked!', e.target.value);
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
        <WordsList words={this.state.words} edit={this.edit.bind(this)} delete={this.delete.bind(this)}/>
      </div>
    )

  }
}

export default App;