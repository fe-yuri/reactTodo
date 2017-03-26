import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render(){
        const {
            todoItems,
            deleteTodo,
            editingId,
            editTodo,
            saveTodo,
            cancelEditTodo
        } = this.props;

        const todolist = todoItems.map(({text, id}) =>
            <Todo
                key            = {`todo#${id}`}
                itemText       = {text}
                isEditing      = {id === editingId}
                editTodo       = {()=> editTodo(id)}
                deleteTodo     = {()=> deleteTodo(id)}
                saveTodo       = {text=> saveTodo(text,id)}
                cancelEditTodo = {() => cancelEditTodo()}
            />
        );
        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    {todolist}
                </ul>
            </div>
        );
    }
}

export default TodoList;