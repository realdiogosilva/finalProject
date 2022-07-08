import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from "./screens/MapScreen";
import AboutScreen from './screens/AboutScreen';
import TravelRequests from './screens/TravelRequest';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='AboutScreen'
          component={AboutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TravelRequests'
          component={TravelRequests}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='MapScreen'
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
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
