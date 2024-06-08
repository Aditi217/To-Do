import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { IoMdRemoveCircleOutline } from "react-icons/io";

export default function Todo() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    const handleAddTodo = () => {
        // trim karne k baad agar koi value rehti hai tabhi add karayenge list me
        if (input.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: input }])

        }

    }
    const removeAll = () => {
        setTodos([])
    }
    const remove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const handleEditTodo = (id, newText) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text: newText }
            }
            return todo;
        }))
    }

    return (
        <>

            <div className='text-center border-4 border-black w-2/5 mx-auto hy-auto  '>
                <h1 className='text-7xl'>Todo List</h1>
                <input type="text" className='p-2 mt-7 mb-7' placeholder='Add Todo' value={input} onChange={(e) => { setInput(e.target.value) }} />
                <button className='bg-black rounded-sm text-white ms-2 p-3' onClick={handleAddTodo}>Add Todo</button>

                {
                    todos.map((todo) => (
                        <ul key={todo.id}>
                            <span>{todo.text}</span>
                            <button className='bg-yellow-500 p-2 m-4  rounded-sm' onClick={() => { handleEditTodo(todo.id, prompt('Edit To Do', todo.text)) }}><CiEdit /></button>
                            <button className='bg-red-500 p-2 m-4 rounded-sm' onClick={() => { remove(todo.id) }}><IoMdRemoveCircleOutline /></button>
                        </ul>
                    ))
                }
                {
                    todos.length > 0  &&
                    <div>
                        <button className='bg-red-500 p-2 m-4 rounded-md' onClick={removeAll}>Remove All</button>
                    </div>
                }
            </div>
        </>
    )
}
