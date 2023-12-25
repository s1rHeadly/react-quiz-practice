import React from 'react'

const Options = ({options, correctOption, dispatch, answer}) => {
 
const hasAnswer = answer !== null;

  return (
    <div className='options'>
    {options?.map((option, index) =>
    <button
    className={`btn btn-option ${index === answer ? "answer" : ""}
    ${hasAnswer ? index === correctOption ? "correct" : "wrong" : ""}` }
    key={option}
    disabled={hasAnswer}
    onClick={() => dispatch({type: 'newAnswer', payload: index})}>
    {option}
    </button>)}
  </div>
  )
}

export default Options