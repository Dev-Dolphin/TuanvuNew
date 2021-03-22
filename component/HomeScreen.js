import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
export default class HomeScreeen extends Component {
  state = {
    email: '',
  };
  componentWillUnmount() {
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({email: user.email});
    } else {
      console.log('null');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> {('Hello Mr : ', this.state.email)} </Text>
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
