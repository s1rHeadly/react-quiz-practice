import React from 'react'

const Options = ({options, correctOption, dispatch, answer}) => {
 
// if ansser is not equal to null condition
const hasAnswered = answer !== null;

function handleAnswer(index){
  dispatch({
    type: 'newAnswer',
    payload: index
  })
}

  return (
    <div className='options'>
    {options?.map((option,index) =>
    <button
    className={
    `btn btn-option
    ${index === answer ? "answer" : ""} 
    ${hasAnswered && index === correctOption ? "correct" : "wrong"}
    `}
    key={option}
    disabled={hasAnswered}
    onClick={() => handleAnswer(index)}>
    {option}
    </button>)}
  </div>
  )
}

export default Options


/**
 * 
    ${hasAnswer ? index === correctOption ? "correct" : "wrong" : ""}` }
    explanation:
    if there is an answer then continue to, IF index === correctOptio, then show correct if not show wrong
    otherwise show an empty string

*/