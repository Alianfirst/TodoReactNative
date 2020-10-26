import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { Context as TodoContext } from '../context/todo.context';
import { Icon, Button } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import TodoForm from '../components/TodoForm';

const EditFormScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state: todos, editTodo } = useContext(TodoContext);

	const todo = todos.find((todo) => todo.id === id);

	const { value, onChangeText } = useInputState(todo.task);

	const onPress = () => {
		editTodo(id, value, () => navigation.pop());
	};
	return (
		<View>
			<TodoForm
				textHeader="Edit your Todo"
				textButton="Edit"
				value={value}
				onChangeText={onChangeText}
				status="warning"
				typeOfForm="Edit Your Todo"
				onPress={onPress}
			/>
		</View>
	);
};

const arrowBackIcon = (props) => {
	return <Icon name="arrow-back-outline" style={styles.iconStyle} fill="black" {...props} />;
};

EditFormScreen.navigationOptions = ({ navigation }) => {
	return {
		headerLeft: () => (
			<Button
				appearance="ghost"
				onPress={() => navigation.pop()}
				style={styles.buttonStyle}
				accessoryLeft={arrowBackIcon}
			/>
		)
	};
};

const styles = StyleSheet.create({
	iconStyle: {
		width: 32,
		height: 32,
		color: 'black'
	}
});

export default EditFormScreen;
