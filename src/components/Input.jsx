import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase.config";

function Input() {
    const [task, setTask] = useState("")
  async function submitHandler(event) {
    event.preventDefault();
    await setDoc(doc(db, "items", task), {
        created: Date.now(),
        active: true
    });
  }

  return (
    <div className="input-container">
      <form className="input" onSubmit={submitHandler}>
        <input 
        className="searchbar"
        type="text"
        value={task}
        placeholder="Add a task"
        onChange={(e) => setTask(e.target.value)}
        ></input>
        <div className="submitButton" onClick={submitHandler}><div className="buttonIcon"></div></div>
      </form>
    </div>
  );
}

export default Input;
