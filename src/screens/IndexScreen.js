import React, { Fragment, useContext, useState } from 'react';
import { Context as TodoContext } from '../context/todo.context';
import { StyleSheet } from 'react-native';
import { IndexPath, Button, CheckBox, Divider, Icon, List, ListItem } from '@ui-kitten/components';
import { FILTER_KEYS, FILTER_MAP } from '../constants';
import TodoFilters from '../components/TodoFilters';

const IndexScreen = ({ navigation }) => {
	const { state: todos, toggleTodo, removeTodo } = useContext(TodoContext);

	const useSelectState = (initialVal = new IndexPath(0)) => {
		const [
			selectedIndex,
			setSelectedIndex
		] = useState(initialVal);
		return { selectedIndex, onSelect: setSelectedIndex };
	};

	const mediumSelectState = useSelectState();

	const { selectedIndex } = mediumSelectState;

	const EditOutlineIcon = (props) => <Icon name="edit-outline" {...props} />;

	const TrashOutlineIcon = (props) => <Icon name="trash-outline" {...props} />;

	const renderItemAccessory = (item) => (
		<Fragment>
			<Button
				style={styles.buttonStyle}
				status="primary"
				accessoryLeft={EditOutlineIcon}
				onPress={() => navigation.navigate('Edit', { id: item.id })}
			/>
			<Button
				style={styles.buttonStyle}
				status="danger"
				accessoryLeft={TrashOutlineIcon}
				onPress={() => removeTodo(item.id)}
			/>
		</Fragment>
	);

	const renderCheckbox = (item) => <CheckBox checked={item.completed} onChange={() => toggleTodo(item.id)} />;

	const renderList = ({ item }) => {
		return (
			<ListItem
				title={item.task}
				accessoryLeft={() => renderCheckbox(item)}
				accessoryRight={() => renderItemAccessory(item)}
			/>
		);
	};

	let value = !selectedIndex ? FILTER_KEYS[0] : FILTER_KEYS[selectedIndex - 1];

	return (
		<Fragment>
			<TodoFilters {...mediumSelectState} />
			<List
				style={styles.container}
				data={todos.filter(FILTER_MAP[value])}
				renderItem={renderList}
				ItemSeparatorComponent={Divider}
			/>
		</Fragment>
	);
};

const createIcon = (props) => {
	return <Icon name="plus-outline" style={styles.iconStyle} fill="black" {...props} />;
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<Button
				appearance="ghost"
				onPress={() => navigation.navigate('Create')}
				style={styles.buttonStyle}
				accessoryLeft={createIcon}
			/>
		)
	};
};

const styles = StyleSheet.create({
	backdropStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		minHeight: 192
	},
	containerStyle: {
		maxHeight: 192
	},
	buttonStyle: {
		height: 3,
		width: 3,
		marginHorizontal: 3
	},
	inputStyle: {
		flex: 1,
		margin: 2
	},
	iconStyle: {
		width: 32,
		height: 32,
		color: 'black'
	}
});

export default IndexScreen;
