import React ,{useState, useEffect}from "react";
import "./App.css";
import Header from "./components/Header";
import Addtodo from './components/Addtodo'
import TodosList from "./components/TodosList";


const App= () =>{
  const intialState= JSON.parse(localStorage.getItem("todos")) || [];
  const[input, setInput]=useState("");
  const[todos, setTodos]=useState(intialState);
  const[editTodo, setEditTodo] = useState(null);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  return(
     <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
          </div>
          <div>
            <Addtodo
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
              />
          </div>
          <div>
            <TodosList todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}
            />
          </div>
      </div>

     </div>
  );
  
}
export default App;