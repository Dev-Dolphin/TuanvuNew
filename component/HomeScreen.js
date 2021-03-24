import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import * as firebase from 'firebase';
export default class HomeScreeen extends Component {
  state = {
    email: '',
  };
  UNSAFE_componentWillMount() {
    var user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      this.setState({email: user.email});
    } else {
      console.log('null');
    }
  }

  async _logOut() {
    await firebase
      .auth()
      .signOut()
      .then(() => console.log('success'))
      .catch(() => {
        console.log('error');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {'Hello Mr : ' + this.state.email} </Text>
        <View>
          <Button
            title={'Logout'}
            style={styles.buttonLogout}
            onPress={() => {
              this._logOut();
            }}
          />
        </View>
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
  buttonLogout: {
    padding: 10,
    borderColor: '#f3f3f3',
    zIndex: 1000,
  },
});
