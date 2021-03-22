/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './component/HomeScreen';
import LoadingScreeen from './component/LoadingScreeen';
import LoginScreen from './component/LoginScreen';
import RegisterScreen from './component/RegisterScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBUWiAAaXlXJz5oyJRPhc8Tui32q0YNxO8',
  authDomain: 'tuanvu-project.firebaseapp.com',
  projectId: 'tuanvu-project',
  storageBucket: 'tuanvu-project.appspot.com',
  messagingSenderId: '533055139038',
  appId: '1:533055139038:web:22be85b0f5898d6d9e264f',
  measurementId: 'G-DM6B4S47QS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Loading" component={LoadingScreeen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
