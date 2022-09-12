import React from 'react';

const WordListEntry = (props) => {
  return (
    <tr>
      <td>{props.word.word}</td>
      <td>{props.word.definition}</td>
      <td>edit  delete</td>
    </tr>
  )
}

export default WordListEntry;