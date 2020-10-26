import React from 'react';
import { StyleSheet } from 'react-native';
import { Select, SelectItem } from '@ui-kitten/components';
import { FILTER_KEYS } from '../constants';

const TodoFilters = ({ ...mediumSelectState }) => {
	const { selectedIndex } = mediumSelectState;
	const renderOption = (title) => <SelectItem title={title} key={title} />;
	return (
		<Select
			style={styles.select}
			size="medium"
			placeholder="Choose the type of ToDo"
			{...mediumSelectState}
			value={FILTER_KEYS[selectedIndex.row]}
		>
			{FILTER_KEYS.map(renderOption)}
		</Select>
	);
};

const styles = StyleSheet.create({
	select: {
		marginVertical: 2
	}
});

export default TodoFilters;
