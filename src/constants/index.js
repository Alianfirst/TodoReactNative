import { ToolbarAndroid } from 'react-native';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const FILTER_MAP = {
	All: () => true,
	Done: (todo) => todo.completed,
	Active: (todo) => !todo.completed
};

export const FILTER_KEYS = Object.keys(FILTER_MAP);
