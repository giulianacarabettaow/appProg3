import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register'

const Tab = createBottomTabNavigator

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name='Register' component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
