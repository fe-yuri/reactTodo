import React from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos : [
                {text : '안녕', id: 1000},
                {text : '반가워', id: 1001}
            ]
        }
    }
    addTodo(text){
        this.setState({
            todos : [
                ...this.state.todos,
                {
                    text,
                    id : new Date()
                }
            ]
        })
    }
    deleteTodo(itemId){
        const newTodo = [...this.state.todos];
        const deletedIndex = newTodo.findIndex((v)=> v.id === itemId);
        newTodo.splice(deletedIndex,1);
        this.setState({
            todos : newTodo
        })
    }
    render(){
        return (
            <div className="todo-app">
                <Header
                    addTodo={text => this.addTodo(text)}
                />
                <TodoList
                    todoItems={this.state.todos}
                    deleteTodo={id => this.deleteTodo(id)}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
