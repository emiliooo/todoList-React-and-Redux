import React , {Component} from 'react';
import {connect} from 'react-redux';

class AddItem extends Component {
    state = {
        completed: '',
        id: '',
        title: '',
        userId: ''
    }

    handleChange = (e) => {
        var randomId = Math.floor(Math.random() * 100000);
        this.setState({
            title:e.target.value,
            id:randomId
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.length > 0) {
            this.props.dispatch({ type:"ADD_ITEM",item:this.state})
            this.setState({title:''})
        } else {
            alert('input is empty');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Add new task:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.title} />
                    <a  onClick={this.handleSubmit} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                </form>
            </div>
        )
    }
}

export default connect()(AddItem)