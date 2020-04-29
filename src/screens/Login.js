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
});

const LoginScreen = ({navigation, login}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot password?
      </Text>
      <View style={styles.button}>
        <Button
          title="Log in"
          //disabled={!email || !password}
          onPress={() => login()}
        />
      </View>
      <View style={styles.button}>
        <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
      </View>
    </SafeAreaView>
  );
};

export default connect(null, {login})(LoginScreen);
