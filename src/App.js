import React from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos : [

            ]
        }
    }
    addTodo(item){
        const addedTodos = [...this.state.todos,item];
        this.setState({
            todos : addedTodos
        })
    }
    deleteTodo(itemIndex){
        console.log(itemIndex);
        const deletedTodo = this.state.todos.splice(itemIndex,1);
        this.setState({
            todos : [...this.state.todos]
        })
    }
    render(){
        const todoItems = this.state.todos;
        return (
            <div className="todo-app">
                <Header
                    addTodo={v => this.addTodo(v)}
                />
                <TodoList
                    todoItems={todoItems}
                    deleteTodo={v => this.deleteTodo(v)}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
