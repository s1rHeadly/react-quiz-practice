import { useReducer } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { LOCAL_URL } from './utils/helpers.js';
import { useEffect } from 'react';


const intitialState = {
  questions: [],  
  status: null // change status IF: isloading, ready, error, active, finished
}

function reducerFnc(state, action){

switch (action.type) {
  case 'dataReceived':
      return{
        ...state,
        questions: action.payload,
        status: 'ready',
      }

  case 'isLoading':
    return{
      ...state,
      status: 'isLoading',
    }

  default:
   return state;
}

}

const App = () =>{

const [state, dispatch] = useReducer(reducerFnc, intitialState);
console.log('render', state)


useEffect(() => {
    const getData = async() => {

      dispatch({type: 'isLoading'})

       try {
        const response = await fetch(LOCAL_URL);

        if(!response.ok){
          throw new Error('something went wrong')
        }
        
        const results = await response.json();
        dispatch({
          type: 'dataReceived', // the event for the switch statement
          payload: results, // the input data
        })

       } catch (error) {
        dispatch({
          type: 'failed',
          payload: error,
        })
       }
    }


    getData()
}, []);

 return (
    <div className="app">
      <Header/>

      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>

    </div>
  );
}

export default App;
