import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import axios from 'axios';
import ToDos from "./components/ToDos";
import Header from "./components/Layout";
import AddToDo from "./components/AddToDo";
import About from "./components/pages/About";
// import { v4 as uuidv4 } from 'uuid';
// import CounterExample from './components/CounterExample';


class App extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6').then(res => this.setState({ todos: res.data }))
    }

    // Toogle complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    // Delete Todo
    deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    }

    // Add Todo
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({todos: [...this.state.todos, res.data]}));
    }

    render() {
        console.log(this.state.todos)
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddToDo addTodo={this.addTodo} />
                                <ToDos todos= {this.state.todos} markComplete= {this.markComplete} deleteTodo= {this.deleteTodo} />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
