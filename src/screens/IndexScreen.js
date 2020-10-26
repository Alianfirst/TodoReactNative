import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as TodoContext } from '../context/todo.context';

import TodoFilters from '../components/TodoFilters';
import TodoList from '../components/TodoList';
import useInputState from '../hooks/useInputState';

import { FILTER_KEYS, FILTER_MAP } from '../constants';

const initialTodos = [
	{ id: 1, task: 'Wash the car', completed: false },
	{ id: 2, task: 'Wash the cat', completed: true }
];

const IndexScreen = () => {
	const data = useContext(TodoContext);
	const useSelectState = (initialVal) => {
		const [
			selectedIndex,
			setSelectedIndex
		] = useState(initialVal);
		return { selectedIndex, onSelect: setSelectedIndex };
	};
	// const [
	// 	value,
	// 	setValue
	// ] = useState('All');

	const mediumSelectState = useSelectState();

	const { selectedIndex, onSelect } = mediumSelectState;
	let value = FILTER_KEYS[selectedIndex];
	const newArr = [];
	if (value) newArr.push(initialTodos.filter(FILTER_MAP[value]));
	console.log(newArr);

	return (
		<View>
			<Text>Todos</Text>
			<TodoFilters {...mediumSelectState} />
			<TodoList />
		</View>
	);
};

const styles = StyleSheet.create({});

export default IndexScreen;
