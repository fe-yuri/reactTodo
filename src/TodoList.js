import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render(){
        const {
            deleteTodo,
            todoItems
        } = this.props;

        const todolist = todoItems.map(({text, id}) =>
            <Todo
                key={`todo#${id}`}
                itemText={text}
                deleteTodo={()=> deleteTodo(id)}
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