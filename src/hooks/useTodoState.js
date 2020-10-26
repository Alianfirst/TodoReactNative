import { useState } from 'react';
import { ADD_TODO } from '../constants';

export default (initialVal) => {
	const [
		todos,
		setTodos
	] = useState(initialVal);

	return {
		todos,
		addTodo: (newTask) =>
			setTodos([
				...todos,
				{ id: todos.length + 1, task: newTask, completed: false }
			]),
		editTodo: (id, newTask) => {
			const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo));
			setTodos(updatedTodos);
		},
		removeTodo: (id) => {
			const updatedTodos = todos.filter((todo) => todo.id !== id);
			setTodos(updatedTodos);
		},
		toggleTodo: (id) => {
			const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
			setTodos(updatedTodos);
		}
	};
};
