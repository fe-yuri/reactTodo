import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render(){
        const { deleteTodo, todoItems } = this.props;
        const arrayTodo = todoItems.map((v,i) =>
            <Todo
                itemText={v}
                itemIndex={i}
                deleteTodo={deleteTodo}
            />
        );
        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    {arrayTodo}
                </ul>
            </div>
        );
    }
}

export default TodoList;