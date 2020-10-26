import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';

const TodoForm = ({ textHeader, textButton, value, onChangeText, status, typeOfForm, onPress }) => {
	return (
		<View style={styles.layoutStyle}>
			<Text>{textHeader}</Text>
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				autoFocus={true}
				style={styles.inputStyle}
				value={value}
				onChangeText={onChangeText}
				status={status}
				placeholder={typeOfForm}
			/>
			<Button style={styles.buttonStyle} status={status} onPress={onPress}>
				{textButton}
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		maxHeight: 50,
		margin: 1
	},
	inputStyle: {
		flex: 1,
		margin: 0,
		padding: 0
	},
	layoutStyle: {
		height: '100%'
	}
});

export default TodoForm;
