import React from 'react'

const Progress = ({numQuestions, index, points, totalPossiblePoints, answer}) => {

  
  return (
    <header className='progress'>
    <progress value={index + Number(answer !== null)} max={numQuestions}/>
      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p>Points <strong>{points}</strong> / {totalPossiblePoints}</p>
    </header>
  )
}

export default Progress



/**
 * {index + Number(answer !== null)
 * convert the boooean to a number
 * if the answer is null we will get 0
 * if we have an answer we get 1
*/