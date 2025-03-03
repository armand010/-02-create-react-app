import React, { useState } from 'react';

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleInputTodo =(e)=>{
        setNewTodo(e.target.value);
    }

    const addTodo =(e)=>{
        setTodos([...todos, newTodo]);
    }

    const removeTodo =(e)=>{
        const updatedTodos = todos.filter((_, i) => i !== e);
        setTodos(updatedTodos);
    }

    return(
        <>
            <h1>Todo List</h1>
            <input type='text' value={newTodo} onChange={handleInputTodo} placeholder='Tambah List' />
            <button onClick={addTodo}>Tambah</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Hapus</button>    
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;