import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class RegisterScreen extends Component {
  state = {
    account: '',
    password: '',
    errorMessage: null,
  };
  submitForm = () => {
    const {account, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(account, password)
      .catch((error) => {
        this.setState({errorMessage: error.message});
      });
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.greeting}>{'Hello Tuanvu!'}</Text>
          <View style={styles.error}>
            <Text>{this.state.errorMessage}</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputAccount}>
              <Text style={styles.textTitle}>Name</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(account) => {
                  this.setState({account});
                }}
                value={this.state.account}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputAccount}>
              <Text style={styles.textTitle}>Account</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(account) => {
                  this.setState({account});
                }}
                value={this.state.account}
                autoCapitalize="none"
              />
            </View>
            <View>
              <Text
                style={styles.textTitle}
                onChangeText={(password) => {
                  this.setState({password});
                }}>
                Password
              </Text>
              <TextInput style={styles.textInput} autoCapitalize="none" />
            </View>
            <TouchableOpacity
              style={styles.buttonSign}
              onPress={this.submitForm}>
              <Text style={styles.titleButton}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.titleButton}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  greeting: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  error: {
    fontSize: 13,
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#8A8F9E',
    height: 40,
  },
  form: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  buttonSign: {
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: 30,
    padding: 15,
    borderColor: '#ff3300',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonRegister: {
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
    borderColor: '#ff3300',
    borderRadius: 5,
    alignItems: 'center',
  },
  titleButton: {
    color: '#ffffff',
  },
});
