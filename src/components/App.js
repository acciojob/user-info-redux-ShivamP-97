
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import {setName,setEmail} from "./userSlice";

const App = () => {
  const dispatch=useDispatch();
  const Name=useSelector((state)=>state.user.name)
  const Email=useSelector((state)=>state.user.email)

  return (
    <div>
        <h1>User Information</h1>
        
          <label htmlFor="name">Name:</label>
          <input
          id="name"
          type="text"
          value={Name}
          onChange={(e)=>dispatch(setName(e.target.value))}
          />
          <br></br>
          <label htmlFor="email">Email:</label>
          <input
          id="email"
          type="email"
          value={Email}
          onChange={(e)=>dispatch(setEmail(e.target.value))}
          />        
        
        <div className="output">
          Name - {Name}
          <br></br>
          Email - {Email}
        </div>
    </div>
  )
}

export default App