import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHobby } from "../../store/actions/hobby";
import HobbyList from "./HobbyList";

// Create Actions
// Create reducers
// Combine root reducer
// Create store
// Add Provider cover App Router provider
// using useSelector: get states from redux store
// using useDispatch: dispatch action from UI to reducer

export default function Hobby() {
  const hobbies = useSelector((state) => state.hobby.hobbies);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = () => {
    const newHobby = inputRef.current.value;
    console.log(newHobby);
    dispatch(addHobby(newHobby));
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Form</h1>
      <input placeholder="Enter your hobby" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <HobbyList hobbies={hobbies} />
    </div>
  );
}
