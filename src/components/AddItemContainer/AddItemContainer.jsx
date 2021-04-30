import React from 'react';

export default function AddItemContainer(props){
    return(
        <div className='addItemContainer'>
            <form onSubmit={ props.onAddItem }>
              <div>
              <span>Добавить заметку:</span>
              <input onChange={ event => props.setValue(event.target.value) } maxLength={ 50 } placeholder='Введите заметку' value={ props.value }/>
              <p>*50 символов максимум</p>
              </div>
              <button onClick={ props.onAddItem } type='submit'>Добавить</button>
            </form>
          </div>
    )
}