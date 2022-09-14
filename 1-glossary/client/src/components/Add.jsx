import React from 'react';


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
  }

  handleChange(e) {
    let value = e.target.value;
    let id = e.target.id;
    console.log(value, id);
    if (id === 'word') {
      this.setState({
        word: value
      })
    } else if (id === 'define') {
      this.setState({
        definition: value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let newWord = {word: this.state.word, definition: this.state.definition}
    this.props.add(newWord)
     .then(() => {
      this.setState({
        word: '',
        definition: ''
      })
     })
  }

  render() {
    return (
      <div>
        <h2> Add New Words</h2>
        <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
          <label>
            Words:
            <input type="text" id="word"/>
          </label>
          <br/>
          <label>
            Definition:
            <input type="text" id="define"/>
          </label>
          <br/>
          <input className="btn" type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default Add;