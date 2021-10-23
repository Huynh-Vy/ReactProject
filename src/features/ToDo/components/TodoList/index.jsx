import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

ToDoList.propTypes = {
   toDoList : PropTypes.array,
   onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
    toDoList : [],
    onToDoClick: null,
};



function ToDoList({toDoList, onToDoClick}) {

    const handleCLick = (todo, idx) => {
        if(!onToDoClick) return;

        onToDoClick(todo, idx);
    
    }
    
    return (
        <ul className="todo-list">
            {toDoList.map((todo, idx) => (
                <li 
                key={todo.id}
                className={classnames({completed: todo.status === 'completed'})}
                onClick = {() => handleCLick(todo, idx)}
                >
                {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;