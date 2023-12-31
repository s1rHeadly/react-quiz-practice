import React from 'react'

const NextQuestBtn = ({dispatch, answer, numQuestions, index}) => {
  
  // if the answer is not clicked, then hide the next question btn
  if(answer === null) return;

  
  if(index < numQuestions - 1){
    return (
      <button
      className='btn btn-ui'
      onClick={() => dispatch({type: 'nextQuestion'})}
      >Next Question</button>
    )
  }

  if(index === numQuestions - 1){
    return (
      <button
      className='btn btn-ui'
      onClick={() => dispatch({type: 'finish'})}
      >Finish</button>
    )
  }
 
}

export default NextQuestBtn