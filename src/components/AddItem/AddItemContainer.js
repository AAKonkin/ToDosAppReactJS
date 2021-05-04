
import { ADD_ITEMAC, UPDATE_FIELDAC, UPDATE_COUNTAC } from '../../redux/ToDosReducer';
import AddItem from './AddItem';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return{
    fieldValue: state.fieldValue,
    activeLength: state.activeLength
  }
}; 

let mapDispatchToProps = (dispatch) => {
  return{
    AddItemBtn : (event) => {
      event.preventDefault();
      dispatch(ADD_ITEMAC());
      dispatch(UPDATE_COUNTAC());
    },
    UpdateField : (value) => {
      dispatch(UPDATE_FIELDAC(value));
    }
  }
};

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps) (AddItem);
export default AddItemContainer;
