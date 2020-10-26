import createDataContext from './createDataContext';
import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants';

const initialTodos = [
	{ id: 1, task: 'Wash the car', completed: false },
	{ id: 2, task: 'Wash the cat', completed: true }
];

const todoReducer = (todos, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...todos,
				{ id: todos.length + 1, task: action.newTask, completed: false }
			];
		case EDIT_TODO:
			return todos.map((todo) => (todo.id === action.id ? { ...todo, task: action.newTask } : todo));
		case REMOVE_TODO:
			return todos.filter((todo) => todo.id !== action.id);
		case TOGGLE_TODO:
			return todos.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		default:
			return todos;
	}
};

const addTodo = (dispatch) => (newTask, callback) => {
	dispatch({ type: ADD_TODO, newTask });
	if (callback) callback();
};

const editTodo = (dispatch) => (id, newTask, callback) => {
	dispatch({ type: EDIT_TODO, id, newTask });
	if (callback) callback();
};

const removeTodo = (dispatch) => (id) => {
	dispatch({ type: REMOVE_TODO, id });
};

const toggleTodo = (dispatch) => (id) => {
	dispatch({ type: TOGGLE_TODO, id });
};

export const { Context, Provider } = createDataContext(
	todoReducer,
	{ addTodo, editTodo, removeTodo, toggleTodo },
	initialTodos
);
