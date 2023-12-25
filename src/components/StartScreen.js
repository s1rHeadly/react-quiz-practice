import React from 'react'

const StartScreen = ({numQuestions, dispatch}) => {

  function startApp(){
    dispatch({
      type: 'start'
    })
  }
  return (
    <div className='start'>
    <h2>Welcome to the React Quiz</h2>
    <h3>{numQuestions || 0} questions to test your React Mastery</h3>
    <button className='btn btn-ui' onClick={startApp}>Let's Start</button>
    </div>
  )
}

export default StartScreen