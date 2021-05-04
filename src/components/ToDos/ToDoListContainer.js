import {connect} from 'react-redux'
import ToDoList from './ToDoList';
import { DELETE_ITEMAC, CHECKED_ITEMAC, UPDATE_COUNTAC } from '../../redux/ToDosReducer';

let mapStateToProps = (state) => {
    return{
        ToDos: state.ToDos
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        DeleteItemBtn : (Itemid) => {
            dispatch(DELETE_ITEMAC(Itemid));
            dispatch(UPDATE_COUNTAC());
        },
        CheckedItenBtn : (Itemid) => {
            dispatch(CHECKED_ITEMAC(Itemid));
            dispatch(UPDATE_COUNTAC());
        }
    }
};

const ToDoListContainer = connect (mapStateToProps, mapDispatchToProps) (ToDoList);

export default ToDoListContainer;