import { useState, useReducer } from "react";


const initialState = {
  count: 0,
  step: 1,
}


function reducerFunc(state, action){
 switch (action.type) {
  case 'reset':
    return{
      count: 0,
      step: 1
    }

  case 'count_value':
    return{
      ...state,
      count: action.payload
    }
  
  case 'step_value':
    return{
      ...state,
      step: action.payload
    }
  case 'increment':
    return{
      ...state,
      count: state.count + state.step
    }
  
    case 'decrement':
      return{
        ...state,
        count: state.count - state.step
      }
 
  default:
   return state;
 }
}

const DateCounter = () => {
  //state 
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

const [state, dispatch] = useReducer(reducerFunc, initialState)
console.log('render', state)

  //functions

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  function dec() {
    dispatch({
      type: 'decrement'
    })
  };


  function inc () {
    dispatch({
      type: 'increment'
    })
  };

  function defineCount(e) {
    // setCount(Number(e.target.value));
    dispatch({
      type: 'count_value',
      payload: Number(e.targe.value),
    })
  };

 function defineStep(e) {
    dispatch({
      type: 'step_value',
      payload: Number(e.target.value)
    })
  };

  function reset() {
   dispatch({
    type: 'reset'
   })
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
