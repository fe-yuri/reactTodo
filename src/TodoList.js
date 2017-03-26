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
            cancelEditTodo,
            toggleTodo
        } = this.props;

        const todolist = todoItems.map(({text, id, isDone}) =>
            <Todo
                key            = {`todo#${id}`}
                itemText       = {text}
                isDone         = {isDone}
                isEditing      = {id === editingId}
                editTodo       = {() => editTodo(id)}
                deleteTodo     = {() => deleteTodo(id)}
                saveTodo       = {text => saveTodo(text,id)}
                cancelEditTodo = {() => cancelEditTodo()}
                toggleTodo     = {() => toggleTodo(id)}
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