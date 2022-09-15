import React from 'react';

class WordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
  }

  edit(e) {

  }

  delete(e) {

  }
  render() {
    return (
      <table>
      <thead>
        <tr><th>Word</th><th>Definition</th><th>Options</th><th>CreateAt</th></tr>
      </thead>
      <tbody>
        {this.props.words.map(word => <WordListEntry word={word} key={word._id} update={this.edit.bind(this)} delete={this.delete.bind(this)}/>)}
      </tbody>
    </table>
    )
  }
};

const WordListEntry = (props) => {
  return (
    <tr>
      <td className="word">{props.word.word}</td>
      <td className="define">{props.word.definition}</td>
      <td>
        <button className="btn" value="edit" onClick={props.update.bind(props.word)}> Edit </button>
        <button className="btn" value="delete" onClick={props.delete.bind(props.word)}> Delete </button>
      </td>
      <td className="time">{props.word.createAt}</td>
    </tr>
  )
}

export default WordsList;