import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as TodoProvider } from './src/context/todo.context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import IndexScreen from './src/screens/IndexScreen';
import EditFormScreen from './src/screens/EditFormScreen';
import CreateFormScreen from './src/screens/CreateFormScreen';

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Create: CreateFormScreen,
		Edit: EditFormScreen
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			headerTitleAlign: 'center',
			headerTitle: 'ToDo App'
		}
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<TodoProvider>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={{ ...eva.light }}>
				<App />
			</ApplicationProvider>
		</TodoProvider>
	);
};
