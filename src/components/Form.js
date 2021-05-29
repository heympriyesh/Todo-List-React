import React,{useEffect,useRef} from 'react'
import {v4 as uuidv4} from 'uuid';

const Form = ({input,input2,setInput,setInput2,todos,setTodos,editTodo,setEditTodo}) => {
    const inputRef=useRef();

    const updateTodo=(title,title2,id,completed)=>{
            const newTodo=todos.map((todo)=>
                todo.id== id? {title,title2,id,completed}:todo
          );
            setTodos(newTodo);
            setEditTodo("")
    };
    
    const onInputChange=(event)=>{
        setInput(event.target.value);
    };

    const onInputChange2=(event)=>{
        setInput2(event.target.value)
    }

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
            setInput2(editTodo.title2);
        }else{
            setInput("")
            setInput2("");
        }
    },[setInput,setInput2,editTodo]) 

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo){
           setTodos([...todos,{id:uuidv4(),title:input,title2:input2,completed:false}]) ;
           setInput("");
           setInput2("");
           inputRef.current.focus();
        }else{
            updateTodo(input,input2,editTodo.id,editTodo.completed);
            
        }
    }
       
    
    return (
        <form onSubmit={onFormSubmit}>
            <input
            text="text"
            placeholder="Enter Quantity"
            className="task-input"
            value={input}
            required
            onChange={onInputChange}
            ref={inputRef}
            />
             <input
            text="text"
            placeholder="Enter a Name"
            className="task-input"
            value={input2}
            required
            onChange={onInputChange2}
            />
            <button className="button-add" type="submit">
                {editTodo ? "OK": "Add"}
            </button>
        </form>

    )
}

export default Form
