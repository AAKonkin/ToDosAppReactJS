import React from 'react';
import TodoListContainer from '../ToDos/ToDoListContainer.js';

export default function AddItem(props){
    return(
        <div>
          <div className='addItemContainer'>
            <h2>Всего активных заметок: <span>{ props.activeLength }</span></h2>
            <form> 
              <div>
                <span>Добавить заметку:</span>
                <input onChange={ event => props.UpdateField(event.target.value) } maxLength={ 50 } placeholder='Введите заметку' value={ props.fieldValue }/>
                <p>*50 символов максимум</p>
              </div>
              <button onClick={ (event) => props.AddItemBtn(event) } type='submit'>Добавить</button>
            </form>
          </div>
          <article>
              <TodoListContainer />
            </article>
        </div>
    )
}