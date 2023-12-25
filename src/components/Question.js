import React from 'react'
import Options from './Options';

const Question = ({question, dispatch, answer}) => {
  const {question: title, options, correctOption} = question;

  return (
    <div>
      <h4>{title}</h4>
      <Options options={options} dispatch={dispatch} answer={answer} correctOption={correctOption}/>

    </div>
  )
}

export default Question