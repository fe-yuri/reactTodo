import React from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                <TodoList></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
