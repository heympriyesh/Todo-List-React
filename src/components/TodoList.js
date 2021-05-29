import React, { useRef } from 'react'

const TodoList = ({todos,setTodos,setEditTodo,ref}) => {
       
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item,completed:!item.completed};
                }
                return item;
            })
        );
    };


    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelte=({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id)); 
    };
    return (
        <div>
        <div className="grid-container">
            <h2>Quantity</h2>
            <h2>Name</h2>
        </div>
        {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title} 
                    className={`list ${todo.completed ? "complete":""}`}
                    onChange={(event)=> event.preventDefault()}/>
                    <input type="text" value={todo.title2} 
                    className={`list ${todo.completed ? "complete":""}`}
                    onChange={(event)=> event.preventDefault()}/>
                    <div>
                        <button className="button-complete task-button" onClick={()=> handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>


                        <button className="button-edit task-button" onClick={()=>handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>

                        <button className="button-delete task-button"
                         onClick={()=> handleDelte(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
               
            ))
        }
     </div>)
}

export default TodoList
