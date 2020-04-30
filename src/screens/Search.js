import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
