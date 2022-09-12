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
      <form onSubmit={this.search.bind(this)}>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.state.input}/>
        <input class='btn' type="submit" value="Search"></input>
      </form>
    )
  }
}

export default Search;