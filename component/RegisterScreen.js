import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import LoadingScreeen from './LoadingScreeen';

export default class RegisterScreen extends Component {
  state = {
    account: '',
    password: '',
    errorMessage: null,
    modalView: false,
    indircator: false,
  };
  loginForm = () => {
    this.props.navigation.navigate('Login');
  };

  alertModel() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalView}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          // this.setState({modalView: !this.state.modalView});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.setState({modalView: !this.state.modalView})}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }

  register = () => {
    this.setState({indircator: true});
    const {account, password} = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(account, password)
      .then(() => {
        this.setState({indircator: false});
        this.setState({modalView: true});
      })
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
              <Text style={styles.textTitle}>Password</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(password) => {
                  this.setState({password});
                }}
                autoCapitalize="none"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonSign}
              onPress={this.loginForm}>
              <Text style={styles.titleButton}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={this.register}>
              <Text style={styles.titleButton}>
                {this.state.indircator ? <LoadingScreeen /> : 'Register'}
              </Text>
            </TouchableOpacity>
          </View>
          {this.alertModel()}
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
