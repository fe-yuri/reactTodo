import React from 'react';

class Header extends React.Component {
    handleKeyDown(e){
        const { addTodo } = this.props;
        if(e.keyCode === 13){
            addTodo(e.target.value);
            e.target.value = '';
        }
    }
    render(){
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                    placeholder="What needs to be done?"
                    onKeyDown={e => this.handleKeyDown(e)}
                />
                <div className="toggle-all" />
            </header>
        );
    }
}

export default Header;
