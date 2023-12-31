import React from 'react'

const Finished = ({totalPossiblePoints, points, dispatch}) => {

  const percentagePointsCompleted = (points / totalPossiblePoints) * 100;
  return (
    <div>
      <p className='result'><strong>You have scored {points} </strong> out of {totalPossiblePoints} / {percentagePointsCompleted.toFixed(2)}%</p>
      <button
      className='btn btn-ui'
      onClick={() => dispatch({type: 'restart'})}
      >Restart Quiz</button>
    </div>
  )
}

export default Finished