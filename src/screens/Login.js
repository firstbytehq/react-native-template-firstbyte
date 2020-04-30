import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

import {login} from 'ReactNativeStarterKit/src/reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    marginBottom: 20,
    textAlign: 'right',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
  },
});

const LoginScreen = ({navigation, login, user}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onPress = () => {
    if (email !== user.email) {
      setEmailError(true);
    }
    if (password !== user.password) {
      setPasswordError(true);
    }
    if (email === user.email && password === user.password) {
      setEmailError(false);
      setPasswordError(false);
      login();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => {
          setEmail(email);
          setEmailError(false);
        }}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {emailError && (
        <Text style={styles.error}>
          The email address that you've entered doesn't match any account
        </Text>
      )}
      <TextInput
        style={styles.input}
        onChangeText={(password) => {
          setPassword(password);
          setPasswordError(false);
        }}
        value={password}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      {passwordError && <Text style={styles.error}>Incorrect password</Text>}
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot password?
      </Text>
      <View style={styles.button}>
        <Button
          title="Log in"
          disabled={!email || !password}
          onPress={onPress}
        />
      </View>
      <View style={styles.button}>
        <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({user}) => ({user});

export default connect(mapStateToProps, {login})(LoginScreen);
