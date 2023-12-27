import React from 'react'

const NextQuestBtn = ({dispatch, answer}) => {
  console.log(answer)
  if(answer === null) return;

  return (
    <button
    className='btn btn-ui'
    onClick={() => dispatch({type: 'nextQuestion'})}
    >Next Question</button>
  )
}

export default NextQuestBtn