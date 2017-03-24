import React from 'react';

class Todo extends React.Component {
    render(){
        const {
            itemText,
            deleteTodo
        } = this.props;
        return (
            <li className="todo-item">
                <div className="toggle" />
                <div className="todo-item__view">
                    <div className="todo-item__view__text">
                        {itemText}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <imput
                    type="text"
                    className="todo-item__edit"
                />
            </li>
        );
    }
}

export default Todo;