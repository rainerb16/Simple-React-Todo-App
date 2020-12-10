import React from "react";
import PropTypes from 'prop-types'

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Item" style={{ flex: '10', padding: '5px', width: '75%' }} value={this.state.title} onChange={this.onChange}/>
                <br />
                <input type="submit" value="submit" className="button" style={{ flex:'1' }} />
            </form>
        );
    }
}

// PropTypes
AddToDo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddToDo;