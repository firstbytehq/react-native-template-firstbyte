import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

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
});

const SignupScreen = ({navigation}) => {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        onChangeText={(fullName) => setFullName(fullName)}
        value={fullName}
        placeholder="Full name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        value={confirmPassword}
        placeholder="Confirm password"
        secureTextEntry
      />
      <View style={styles.button}>
        <Button
          title="Sign up"
          disabled={!fullName || !email || !password || !confirmPassword}
        />
      </View>
      <View style={styles.button}>
        <Button title="Log in" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
