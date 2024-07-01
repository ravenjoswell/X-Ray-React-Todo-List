import { useState } from 'react'
import './App.css'
import './index.css'
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")


  const handleAddToDo = () => {
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    }

  let updatedTodoArr = [...allTodos];
  updatedTodoArr.push(newTodoItem);
  setTodos(updatedTodoArr);
  }
  return (
    <>
      <div className="App">
        <h1>My Todos</h1>  
        <div className="to-do-wrapper">
          <div className="to-do-input">
            <div className="to-do-input-item">
              <label>Title</label>
              <input type="text" value={newTitle} onChange={(e) =>setNewTitle(e.target.value)} placeholder="What's the task title" />
            </div>
            <div className="to-do-input-item">
              <label>Description</label>
              <input type="text" value={newDescription} onChange={(e) =>setNewDescription(e.target.value)} placeholder="What's the task description" />
            </div>
            <div className="to-do-input-item">
              <button type="button" onClick={handleAddToDo} className="primaryButton">Add</button>
            </div>
          </div>

            <div className="bottom-area">

              <button 
              className={`isCompleteScreen ${isCompleteScreen===false && 'active'}`}
              onClick={() => setIsCompleteScreen(false)}
              >Todo
              </button>

              <button 
              className={`isCompleteScreen ${isCompleteScreen===true && 'active'}`} 
              onClick={() => setIsCompleteScreen(true)}
              >Completed
              </button>

            </div>

            <div className="to-do-list">
              
              {allTodos.map((item,index) => {
                return (
                  <div className="to-do-list-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p> 
                {/* <button className="icon">Delete</button> */}
                {/* <button className="check-icon">Done</button> */}
                <BsCheckLg className="check-icon" />
                 <div>
                <AiOutlineDelete className="icon" />
                </div>
               </div>
                )
              })}
            </div>    
        </div>
      </div>
    </>
  );
}

export default App
