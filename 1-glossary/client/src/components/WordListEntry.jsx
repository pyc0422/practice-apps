import React from 'react';

const WordListEntry = (props) => {
  return (
    <tr>
      <td className="word">{props.word.word}</td>
      <td className="define">{props.word.definition}</td>
      <td className="time">{props.word.createAt}</td>
      <td>
        <button className="btn" value="edit" onClick={props.update}/>
        <button className="btn" value="delete" onClick={props.delete}/></td>
    </tr>
  )
}

export default WordListEntry;