import React from 'react'

const NextQuestBtn = ({dispatch, answer}) => {
  
  // if the answer is not clicked, then hide the next question btn
  if(answer === null) return;

  return (
    <button
    className='btn btn-ui'
    onClick={() => dispatch({type: 'nextQuestion'})}
    >Next Question</button>
  )
}

export default NextQuestBtn