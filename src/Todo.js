import React ,{ useEffect }  from 'react'
import {connect} from 'react-redux';
import {getAllLists} from './store/operations';
import PropTypes from 'prop-types';


const Todo = ({item,deleteItem,getAllLists}) =>  {

    useEffect(() => {
        getAllLists()
    }, [])

    const removeTask = (idNr) => {
      deleteItem(idNr);
    }

    const todoList = item.length ? (
        item.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span> {todo.title} </span>
                        <label className="checkbox-item">
                            <input type="checkbox" className="filled-in" />
                            <span>DONE</span>
                        </label>
                    <button className="waves-effect waves-light btn" onClick={ () => { removeTask(todo.id) }} >delete</button>
                </div>
            )
        })
    ) : (
        <p>  You don't have todo list</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
 }

 Todo.propTypes = {
    item: PropTypes.array.isRequired,
    deleteItem:  PropTypes.func.isRequired,
    getAllLists: PropTypes.func.isRequired,
};

 const mapStateToProps = state => {
    return {
        item:state.item,
        checked:false
    }
 }

 const mapDispatchToProps = dispatch => ({
     getAllLists: () => dispatch(getAllLists()),
     deleteItem: (id) => dispatch({type:'DELETE_ITEM',id:id})
 })

export default connect(mapStateToProps,mapDispatchToProps)(Todo)