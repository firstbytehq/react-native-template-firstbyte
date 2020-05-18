import React, {useState} from 'react';
import {connect} from 'react-redux';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {signup} from '../reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
  icon: {
    paddingBottom: 20,
  },
});

const SignupScreen = ({navigation, signup}) => {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const onSignup = () => {
    signup({fullName, email, password});
    setSignupSuccess(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {signupSuccess ? (
        <>
          <Icon
            name="check-circle"
            size={50}
            color="green"
            style={styles.icon}
          />
          <Text style={styles.title}>You have signed up successfully</Text>
          <View style={styles.button}>
            <Button
              title="Back to Log in"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Sign up</Text>
          <TextInput
            style={styles.input}
            onChangeText={(fullName) => setFullName(fullName)}
            value={fullName}
            placeholder="Full name"
            autoCapitalize="words"
          />
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
          <View style={styles.button}>
            <Button
              title="Sign up"
              disabled={!fullName || !email || !password}
              onPress={onSignup}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Log in"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default connect(null, {signup})(SignupScreen);
