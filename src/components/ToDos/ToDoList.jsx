import React from 'react';
import ToDoItem from './ToDoItem';

export default function TodoList(props) {
    
    let todoList = props.ToDoItems.map(item => 
        <ToDoItem id={ item.id } checked={ item.checked } message={ item.message } 
        onChecked={ () => props.onChecked(item.id) } 
        onDelItem={ () => props.onDelItem(item.id) }
        key={ item.id }/>)

    return(<div className='ToDoList'>
            { todoList }
        </div>
    );
};