import React from "react";
import data from "./data.json";
import { useState } from 'react';
import ToDoList from "./ToDoList.jsx";
import Header from "./Header.jsx";
import ToDoForm from "./ToDoForm.jsx";



//create your first component
const Home = () => {
	const [toDoList, setToDoList] = useState(data);

	const handleToggle = (id) => {
		let mapped = toDoList.map(task => {
			return task.id == id ? { ...task, complete: !task.complete } : { ...task };
		});
		setToDoList(mapped);
	}

	const handleFilter = () => {
		let filtered = toDoList.filter(task => {
			return !task.complete;
		});
		setToDoList(filtered);
	}

	const addTask = (userInput) => {
		let copy = [...toDoList];
		copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
		setToDoList(copy);
	  }

	return (
		<div className="container-fluid text-center">
			<div className="row">
				<div className="header-main col-xl-12">
					<Header />
				</div>
				<div className="col-xl-12">
					<ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
					<ToDoForm addTask={addTask}/>
				</div>
			</div>
		</div>
	);
};

export default Home;
