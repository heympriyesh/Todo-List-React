import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';
import {Link} from 'react-router-dom';

const App=()=> {
  const [input,setInput]=useState("");
  const [input2,setInput2]=useState("");
  const [todos, setTodos]=useState([]);
  const [editTodo,setEditTodo]=useState(null);

  return (
   
      <div className="container1">
        <Link to="/"  className="nav-todo">
          Home
         </Link>
      <div className="app-wrapper">
          <div>
          <Header value="Todo List"/>
          </div>
          <div>
            <Form
            input={input}
            input2={input2}
            setInput={setInput}
            setInput2={setInput2}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <TodoList todos={todos} setTodos={setTodos}
            setEditTodo={setEditTodo}
            />
          </div>
      </div>
      <Search value={todos}/>
    </div>
  
    
  );
}

export default App;
