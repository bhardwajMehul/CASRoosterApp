import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RoosterList, RoosterDetails } from './Scenes/Rooster';

const Stack = createNativeStackNavigator();

export default () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen component={RoosterList} name={'RoosterList'} />
			<Stack.Screen component={RoosterDetails} name={'RoosterList'} />
		</Stack.Navigator>
	</NavigationContainer>
);
