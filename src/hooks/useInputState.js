import { useState } from 'react';

export default (initialVal) => {
	const [
		value,
		setValue
	] = useState(initialVal);

	const reset = () => setState('');

	return {
		value,
		onChangeText: setValue,
		reset
	};
};
