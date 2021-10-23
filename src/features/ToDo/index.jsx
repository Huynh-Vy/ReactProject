import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import ToDoList from './components/TodoList';


function ToDoFeature(props) {
    const initToDoList = [
        {
            id : 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id : 2,
            title: 'Code',
            status: 'completed' 
        },
        {
            id : 3,
            title: 'Sleep',
            status: 'new'
        },
    ];

    const [todoList, setTodoList] = useState(initToDoList);

    const handleToDoClick = (todo, idx) => {
        console.log(todo, idx);

        const newToDoList = [...todoList];

        newToDoList[idx] = {
            ...newToDoList[idx],
            status: newToDoList[idx].status === 'new' ? 'completed' : 'new',
        };

        setTodoList(newToDoList);
    }

    return (
        <div>
            <h3>To Do List</h3>
            <ToDoList toDoList={initToDoList} onToDoClick = {handleToDoClick}/>
        </div>
    );
}

export default ToDoFeature;