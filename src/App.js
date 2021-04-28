import React from 'react';
import './App.css';
import ToDoList from './ToDos/ToDoList';

const App = () => {
  // State of Array items
  //-----------------//
  //
  const [ToDoItems , setToDo] = React.useState([
    { id:1, checked: false, message:'Сходить в магазин' },
    { id:2, checked: false, message:'Доделать проект' },
    { id:3, checked: false, message:'Написать свой бит' },
    { id:4, checked: false, message:'Написать другу' },
    { id:5, checked: false, message:'Залить проект на GitHub' },
    { id:6, checked: true, message:'Залить проект на GitHub' }
  ]);
  
  // counter of active note
  let count = () => {
    let count = 0;
    for (let item in ToDoItems){
      if (ToDoItems[item].checked === false) count++
    }
    if (count === 0) count='Нет активных заметок'
    return count;
  };

  // ItemList actions
  //-----------------//
  // if activate checkbox
  const onChecked = (id) => {
    setToDo(ToDoItems.map(item => {
        if (item.id === id){
            item.checked = !item.checked;
        }
        return item;
    }));
  };

  // if delete item of list
  const onDelItem = (id) => {
    ToDoItems.splice((--id),1);
    setToDo(
      ToDoItems.map((item, index) => {
        item.id = (++index);
        return item;
    })
    )
  }

  // AddItemContainer
  //-----------------//
  // State of ItemAdd input
  const [value, setValue] = React.useState('');

  const onAddItem = (event) => {
    event.preventDefault();
    if (value.trim()){
      let leng = ToDoItems.length;
      setToDo(ToDoItems.concat([{
        id: (++leng),
        checked: false,
        message: value
      }]),
      ToDoItems.map((item, index) => {
        item.id = (++index);
        return item;
      })
      );
      setValue('');
    }
  }

  // JSX App component
  //-----------------//
  //
  return(
    <div className='App'>
      <div className='container'>
        <header>
          <h1>TODO List Experience Project (React)</h1>
          <h2>Всего активных заметок: <span>{ count() }</span></h2>
          <div className='addItemContainer'>
            <form onSubmit={ onAddItem }>
              <div>
              <span>Добавить заметку:</span>
              <input onChange={ event => setValue(event.target.value) } maxLength={ 50 } placeholder='Введите заметку' value={ value }/>
              <p>*50 символов максимум</p>
              </div>
              <button onClick={ onAddItem } type='submit'>Добавить</button>
            </form>
          </div>
        </header>
        <article>
        { ToDoItems.length ? (<ToDoList ToDoItems={ ToDoItems } onChecked={ onChecked } onDelItem={ onDelItem } />) : <p>У Вас нет заметок. Вы можете их добавить</p> }
        </article>
    </div>
    </div>
  )
}

export default App;