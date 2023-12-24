import { useEffect, useReducer } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { LOCAL_URL } from './utils/helpers.js';


const initialState = {
  data: [],
  isLoading: false,
  error: null
}


function reducerFunc(state, action){
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true
      }
    
      case 'failed':
        return {
          ...state,
          error: action.payload
        }

        case 'success':
          return {
            ...state,
            isLoading: false,
            error: null,
            data: action.payload
          }
  
    default:
      return state;
  }
}

const App = () => { 

  const [state, dispatch] = useReducer(reducerFunc, initialState)

useEffect(() => {

  const controller = new AbortController();

  const fetchData = async(url) => {
    // dispatch loading reducer to loading
    dispatch({
      type: 'loading'
    })

    try {
      
      const response = await fetch(url, { signal: controller.signal});
    if(!response.ok){
        // dispatch error to the reducer
        dispatch({
          type: 'failed',
          payload: response.error,
        })
    }

    if(response.status === 200){
      const data = await response.json();
      // dispatch success and pass the data to the reducer
      dispatch({
        type: 'success',
        payload: data,
      })

    }


    } catch (error) {
      //dispatch error reducer
      dispatch({
        type: 'failed',
        payload: error,
      })
    }
  }


  fetchData(LOCAL_URL)

  return(() => {
    controller.abort();
  })
 
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
