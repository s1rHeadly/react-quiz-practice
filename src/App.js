import { useEffect, useReducer } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Loader from './components/Loader.js';
import Error from './components/Error.js';
import StartScreen from './components/StartScreen.js';
import Question from './components/Question.js';
import { LOCAL_URL } from './utils/helpers.js';



const initialState = {
  questions: [],
  status: '', // choose between 'loading, error, ready, active, finished'
  index: 0,
  answer: null,
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
    return{
      ...state,
     answer: action.payload,
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
       {status === 'active' && <Question question={questions[index]} dispatch={dispatch} answer={answer}/>}
      </Main>

    </div>
  );
}

export default App;
