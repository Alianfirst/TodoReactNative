import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { Context as TodoContext } from '../context/todo.context';
import { Icon, Button, Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import TodoForm from '../components/TodoForm';

const CreateFormScreen = ({ navigation }) => {
	const { addTodo } = useContext(TodoContext);

	const { value, onChangeText } = useInputState('');

	const onPress = () => {
		addTodo(value, () => navigation.pop());
	};
	return (
		<Layout style={styles.layoutStyle}>
			<TodoForm
				textHeader="Create your Todo"
				textButton="Create"
				value={value}
				onChangeText={onChangeText}
				status="primary"
				typeOfForm="Create New Todo"
				onPress={onPress}
			/>
		</Layout>
	);
};

const arrowBackIcon = (props) => {
	return <Icon name="arrow-back-outline" style={styles.iconStyle} fill="black" {...props} />;
};

CreateFormScreen.navigationOptions = ({ navigation }) => {
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

export default CreateFormScreen;
