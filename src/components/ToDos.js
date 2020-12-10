import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';



class ToDos extends React.Component {
    render() {
        return(
            this.props.todos.map((todo) => (
               <ToDoItem key= {todo.id} todo= {todo} markComplete= {this.props.markComplete} deleteTodo={this.props.deleteTodo} />
            ))
        )
    }
}

// PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default ToDos;