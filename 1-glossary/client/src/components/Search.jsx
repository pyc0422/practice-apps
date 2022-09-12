import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  search() {
    this.props.search(this.state.input);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.state.input}/>
        <button onClick={this.search.bind(this)} value="Search"></button>
      </div>
    )
  }
}

export default Search;