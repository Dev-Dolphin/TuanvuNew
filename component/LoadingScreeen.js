import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

import * as firebase from 'firebase';

export default class LoadingScreeen extends Component {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.props.navigation.navigate(user ? 'Home' : 'Login');
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text> Loadding... </Text>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
