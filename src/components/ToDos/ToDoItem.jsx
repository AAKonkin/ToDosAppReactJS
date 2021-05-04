import React from 'react';

export default function ToDoItem(props){
    let classes = ['ToDoItem'];
    if (props.checked){
        classes.push('done');
    };
    return(
        <div className={ classes.join(' ') }>
            <div>
                <p>{ props.id }</p>
                <input onChange={ () => props.CheckedItenBtn(props.id) } type='checkbox' checked={ props.checked } />
                <span>{ props.message }</span>
            </div>
            <button onClick={ () => props.DeleteItemBtn(props.id) }>Удалить</button>
        </div>
    )
}