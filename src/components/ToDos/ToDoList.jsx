import React from 'react';
import ToDoItem from './ToDoItem';

export default function TodoList(props) {
    let todoList = props.ToDos.map(item => 
        <ToDoItem id={ item.id } checked={ item.checked } message={ item.message } 
        CheckedItenBtn={ props.CheckedItenBtn }
        DeleteItemBtn={ props.DeleteItemBtn }
        key={ item.id }/>)
    return(<div className='ToDoList'>
             { (props.ToDos.length) === 0 ? <p>У Вас нет заметок. Вы можете их добавить</p> : null }
             { todoList }
        </div>
    );
};