import { useState, useReducer} from "react";



const initialState = {
  count: 0,
}

const reducerFtn = (state,action) => {
  if(action.type === 'value'){
   state = [...state, {count: action.payload}]
  }

}


function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);


  const [state, dispatch] = useReducer(reducerFtn, initialState)
  
 

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    setCount((count) => count - step);
  };

  const inc = function () {
    // setCount((count) => count + 1);
    setCount((count) => count + step);
  };

  const defineCount = function (e) {
   //  setCount(Number(e.target.value));
    dispatch({
      type: "value",
      payload: Number(e.target.value)
    })
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
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
