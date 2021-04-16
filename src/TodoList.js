import React from 'react';
import './TodoList.css';

function TodoList(props) {
    let todoList = props.todoList;
    let todoLiElement= todoList.map(item => {
        return <li key={item.id}>{item.id}<span onClick={() => props.removeItemMth(item.id)}>X</span></li>
    })

    return (
        <ul className="the-list">
            {todoLiElement}
        </ul>
    );
}

export default TodoList;