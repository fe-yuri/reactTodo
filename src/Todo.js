import React from 'react';
import ClassNames from 'classnames';

class Todo extends React.Component {
    componentDidUpdate(prevProps){
        console.log(`${this.props.itemText}아이템이 업데이트 되었다. :`,prevProps.isEditing);
        if(this.props.isEditing && !prevProps.isEditing){
            this._input.focus();
            this._input.value = this.props.itemText;
        }
    }
    handleKeyDown(e){
        if(e.keyCode === 13 ){
            this.props.saveTodo(e.target.value);
        }
    }
    render(){
        const {
            itemText,
            deleteTodo,
            isEditing,
            editTodo,
            cancelEditTodo
        } = this.props;

        return (
            <li className={ClassNames("todo-item", {
                editing: isEditing
            })}>
                <div className="toggle" />
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={editTodo}
                    >
                        {itemText}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <input
                    type="text"
                    className="todo-item__edit"
                    ref={ ref => { this._input = ref}}
                    onKeyDown={e => this.handleKeyDown(e)}
                    onBlur={cancelEditTodo}
                />
            </li>
        );
    }
}

export default Todo;