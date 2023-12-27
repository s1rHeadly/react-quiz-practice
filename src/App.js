import { useEffect, useReducer } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Loader from './components/Loader.js';
import Error from './components/Error.js';
import StartScreen from './components/StartScreen.js';
import Question from './components/Question.js';
import NextQuestBtn from './components/NextQuestBtn.js';
import { LOCAL_URL } from './utils/helpers.js';



const initialState = {
  questions: [],
  status: '', // choose between 'loading, error, ready, active, finished'
  index: 0, // the index value of the current question
  answer: null, // answer value
  points: 0, // current points
}


function reducerFunc(state, action){
  switch (action.type) {
   
    case 'loading':
      return{
        ...state,
        status: 'loading'
      }

    case 'dataReceived':
      return{
          ...state,
          questions: action.payload,
          status: 'ready'
      }
    
    case 'dataFailed':
      return{
        ...state,
        status: "error"
      }

    case 'start':
      return {
        ...state,
        status: 'active'
      }
    
    case 'newAnswer':
      // gets the current question
      const currentQuestion = state.questions.at(state.index)
     
      return{
        ...state,
        answer: action.payload,
        // if the action.payload === correctOpton of the current question
        // then update the existing state points + the points value otherwise return the existing state points
        points: action.payload === currentQuestion.correctOption
              ? state.points + currentQuestion.points : state.points
      }

    case 'nextQuestion':
      return{
        ...state,
        index: state.index++, // adding one to the index value
        answer: null, // reset the question so the last state update doesnt carry over
      }
   
    default:
      return state;
  }
}



const App = () => { 

  // reducer state
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  const {questions, status, index, answer} = state;

  const numQuestions = questions.length;


  //effects

useEffect(() => {
 
 dispatch({ // dispatch loading reducer to loading
  type: 'loading'
})
  // fetch function
  const fetchData = async(url) => {
   
    try {
      const response = await fetch(url)
   
      if(response.status === 200){
        const data = await response.json();
        
        dispatch({ // dispatch the data and update the status with this case type
          type: 'dataReceived',
          payload: data,
        })
        return;
      }

      } catch (error) {
        dispatch({   //dispatch error reducer
          type: 'dataFailed',
        })
      }
  }

  fetchData(LOCAL_URL)
 
}, []);


 return (
    <div className="app">
      <Header/>

      <Main>
       {status === 'loading' && <Loader />}
       {status === 'error' && <Error />}
       {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
       {status === 'active' &&
       <>
       <Question question={questions[index]} dispatch={dispatch} answer={answer}/>
       <NextQuestBtn dispatch={dispatch} answer={answer}/>
       </>
       }
      </Main>

    </div>
  );
}

export default App;
