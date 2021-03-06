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
import {Provider} from 'react-redux';
import store from './store/storeGlobal';

var firebaseConfig = {
  apiKey: 'AIzaSyDrmAClG2W0vz-Add9PxqvJ7YLnSdwkO9k',
  authDomain: 'tuanvudev.firebaseapp.com',
  projectId: 'tuanvudev',
  storageBucket: 'tuanvudev.appspot.com',
  messagingSenderId: '941508427193',
  appId: '1:941508427193:web:f51accdf9b3ae28c924a68',
  measurementId: 'G-SRGFD21V1R',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
class App extends Component {
  render() {
    let auth = false;
    firebase.auth().onAuthStateChanged((user) => {
      user ? (auth = true) : (auth = false);
    });
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={auth ? 'Home' : 'Login'}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Loading" component={LoadingScreeen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
