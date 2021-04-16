import React, { useState } from 'react';
import './Todo.css';
import TodoList from './TodoList';

const Todo = () => {

const [list, setList] = useState([]);
const [itemInput, setItemInput] = useState('');

const handleItemInput = (event) => {
    setItemInput(event.target.value);
    
}

const addItem = (event) => {
    event.preventDefault();
    let newItem = {
        id: Date.now(),
        item: itemInput
    };

    setList((prevState) => {
        return prevState.concat(newItem);
    });

    setItemInput("");
}

const removeItem = (itemID) => {
    setList((prevState) => {
        return prevState.filter((item) => {
            return (item.id !== itemID) })
        
    })

}




return (
    <div className="list-main">
        <h1>To do list: </h1>
        <form onSubmit={addItem}>
            <input onChange={handleItemInput} value={itemInput}
            type="text" placeholder="Enter item"/>
            <button type="submit">Add item</button>
        </form>
        <TodoList todoList={list} removeItemMth={removeItem}/>
    </div>
    );
}

export default Todo;