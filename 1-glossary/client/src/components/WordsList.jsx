import React from 'react';

class WordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      editClick: false,
    }
  }

  handleChange(e) {
    let className = e.target.className;
    let value = e.target.value;
    if (className === 'word') {
      this.setState({
        word: value
      })
    } else if (className === 'define') {
      this.setState({
        definition: value
      })
    }
  }

  edit(e) {
    e.preventDefault();
    this.setState ({
      editClick:true
    })
  }

  delete(e) {
    e.preventDefault();
    this.props.delete(this.props.word)

  }

  componentDidMount() {
    this.setState ({
      word: this.props.word.word,
      definition: this.props.word.definition,
    })
  }

  submit(e) {
    e.preventDefault();
    console.log(e.target.value, 'submit');

    this.props.update(this.props.word, this.state)
      .then(() => {
        this.setState({
          editClick: false
        })
      })

  }
  render() {

    return (
      <tr>

        <td className="word">
          {this.state.editClick ?
          <input className="word" type="text" value={this.state.word} onChange={this.handleChange.bind(this)} />
          : this.state.word}
        </td>
        <td className="define">
          {this.state.editClick ?
          <input className="define" type="text" value={this.state.definition} onChange={this.handleChange.bind(this)} />
          : this.state.definition
          }
        </td>
        <td>
          {
            this.state.editClick ?
            <button className="btn" value="comfirm" onClick={this.submit.bind(this)}>Done</button>
            :
            <button className="btn" value="edit" onClick={this.edit.bind(this)}>Edit</button>
          }
          <button className="btn" value="delete" onClick={this.delete.bind(this)}> Delete </button>
        </td>
        <td className="time">{this.props.word.createAt}</td>
      </tr>

    )
  }
};


export default WordsList;
