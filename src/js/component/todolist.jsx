import React, {useState} from "react";

const Todolist = () =>{
    const [inputValue, setInputValue] = useState ('');
    const [todos, setTodos] = useState ([]);
    return (
        <>
        <div className="container">
        <h1>My To do's</h1>

        <ul>
            <li>
                <input 
                type="text" 
                placeholder="What needs to be done"
                onChange={(e)=> setInputValue (e.target.value)}
                onKeyDown={ (e) => {
                    if (e.key === "Enter") {
                        setTodos(todos.concat(inputValue));
                        setInputValue ("")
                    }
                }}
                value= {inputValue}
                 />
            </li>
            {todos.map ((t)=>(
                <li>{t}</li>
            ))}
            
            
        </ul>
        <div> {todos.length} tasks</div>

        </div>

        </>
    )
}

export default Todolist