import React from 'react';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement, reset} from "./Actions/actions"


function App() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  const inc=()=>{
    dispatch(increment())
  }
  const dec=()=>{
    dispatch(decrement())
  }
  const res=()=>{
    dispatch(reset())
}
  return (
    <div className="App">
      
      <button className=" my-btn" style={{color: "blue"}} onClick={inc} >▲</button>
      <h1 style={{color:"silver"}} >{count}</h1>
      <button className=" my-btn" style={{color: "red"}} onClick={dec} >▼</button>
      
      <button className="my-btn" onClick={res} >Reset</button>

    </div>
  );
}

export default App;
