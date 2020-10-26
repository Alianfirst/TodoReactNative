import React from 'react';
import { StyleSheet, Chec } from 'react-native';
import { Icon, Layout, Select, SelectItem } from '@ui-kitten/components';

const TodoFilters = ({ ...mediumSelectState }) => {
	return (
		<Select style={styles.select} size="medium" placeholder="Medium" {...mediumSelectState}>
			<SelectItem title="Option 1" />
			<SelectItem title="Option 2" />
			<SelectItem title="Option 3" />
		</Select>
	);
};

const styles = StyleSheet.create({
	select: {
		marginVertical: 2
	}
});

export default TodoFilters;
