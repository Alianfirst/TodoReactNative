import React from 'react';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as TodoProvider } from './src/context/todo.context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import IndexScreen from './src/screens/IndexScreen';
import { Text } from 'react-native';

const navigator = createStackNavigator(
	{
		Index: IndexScreen
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			headerTitleAlign: 'center',
			header: () => (
				<Header
					leftComponent={{ color: '#fff' }}
					centerComponent={{ text: 'Todos', style: { color: '#fff', fontSize: 20 } }}
					rightComponent={{ color: '#fff' }}
				/>
			)
		}
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<TodoProvider>
			<ApplicationProvider {...eva} theme={{ ...eva.light }}>
				{/* <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
				<App />
				{/* </Layout> */}
			</ApplicationProvider>
		</TodoProvider>
	);
};
