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
});

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="Valid email address"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title="Submit" disabled={!email} />
      </View>
      <View style={styles.button}>
        <Button
          title="Back to Log in"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
