import React from 'react';
import Add from './Add.jsx';
import Search from './Search.jsx';
//import WordListErty from './WordListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      words: []
    }
  }

  add(obj) {
    console.log(obj, 'started add!');
  }

  search(key) {
    console.log(key, ' started search!');
  }


  render() {
    return(
      <div>
        <Add add={this.add.bind(this)}/>
        <Search search={this.search.bind(this)}/>
        <h2>Exists Word and Definition: </h2>
        <table>
          <thead>
            <tr><th>Word</th><th>Definition</th><th>Options</th></tr>
          </thead>
        </table>
      </div>
    )

  }
}

export default App;