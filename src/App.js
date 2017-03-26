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
            ],
            editingId : null
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
    editTodo(itemId){
        console.log(itemId);
        this.setState({
            editingId : itemId
        });
    }
    saveTodo(text,id){
        const saveItemIndex = this.state.todos.findIndex(v => id === v.id);
        const newTodos = [...this.state.todos];
        newTodos[saveItemIndex].text = text;
        this.setState({
            todos : newTodos,
            editingId : null
        })
    }
    cancelEditTodo(){
        this.setState({
            editingId : null
        })
    }
    render(){
        return (
            <div className="todo-app">
                <Header
                    addTodo={text => this.addTodo(text)}
                />
                <TodoList
                    todoItems   = {this.state.todos}
                    deleteTodo  = {id => this.deleteTodo(id)}
                    editingId   = {this.state.editingId}
                    editTodo    = {id => this.editTodo(id)}
                    saveTodo    = {(text,id) => this.saveTodo(text,id)}
                    cancelEditTodo = {() => this.cancelEditTodo()}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
