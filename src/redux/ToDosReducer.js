const ADD_ITEM = 'ADD-ITEM';
const DELETE_ITEM = 'DELETE-ITEM';
const CHECKED_ITEM = 'CHECKED-ITEM';
const UPDATE_FIELD = 'UPDATE-FIELD';
const UPDATE_COUNT = 'UPDATE-COUNT';

const initialState = {
    ToDos: [
        { id:1, checked: false, message:'Сходить в магазин' },
        { id:2, checked: false, message:'Доделать проект' },
        { id:3, checked: false, message:'Написать свой бит' },
        { id:4, checked: false, message:'Написать другу' },
        { id:5, checked: false, message:'Залить проект на GitHub' },
        { id:6, checked: true, message:'Залить проект на GitHub' }
    ],
    fieldValue: '',
    activeLength: 5
};

let activeLen = (massive) => {
    let count = 0;
        for (let item in massive){
          if (massive[item].checked === false) count++
        }
        if (count === 0) count='Нет активных заметок'
        return count;
};

const ToDosReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEM: {
            let len = state.ToDos.length;
            return {...state,
                ToDos:(([...state.ToDos,{ id: ++len, checked: false, message: state.fieldValue }])
                    .filter( item => item.message.trim() !== '')
                    .map((item, index) => {
                            item.id = (++index);
                            return item;
                        })),
                fieldValue: '' }
        }

        case DELETE_ITEM:
            return {...state, 
                ToDos: (state.ToDos.filter( item => item.id !== action.itemID)
                        .map((item, index) => { 
                            item.id = (++index); 
                            return item; 
                        }) )
                    }

        case CHECKED_ITEM:
            return {...state, ToDos: state.ToDos.map( item => {
                if (item.id === action.itemID){
                    item.checked = !item.checked;
                }
                return item;
            })}
        
        case UPDATE_FIELD: return {...state, fieldValue: action.value }

        case UPDATE_COUNT: {
            let count = activeLen(state.ToDos)
            return{...state, activeLength: count}
        }

        default: return state;
    };
};

export const ADD_ITEMAC = () => ({ type: ADD_ITEM });
export const DELETE_ITEMAC = (id) => ({ type: DELETE_ITEM, itemID: id });
export const CHECKED_ITEMAC = (id) => ({ type: CHECKED_ITEM, itemID: id });
export const UPDATE_FIELDAC = (input) => ({ type: UPDATE_FIELD, value: input });
export const UPDATE_COUNTAC = () => ({ type: UPDATE_COUNT });
export default ToDosReducer;