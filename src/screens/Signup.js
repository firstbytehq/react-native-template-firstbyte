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

  return (
    <SafeAreaView style={styles.container}>
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
        <Button title="Sign up" disabled={!fullName || !email || !password} />
      </View>
      <View style={styles.button}>
        <Button title="Log in" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
