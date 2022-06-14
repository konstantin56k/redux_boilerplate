import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logInOut } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>Counter = {counter}</h3>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>Login status: {!isLogged ? 'Is not logged' : 'Logged'}</h3>
      <button onClick={() => dispatch(logInOut())}>Log in/out</button>
    </div>
  );
}

export default App;
