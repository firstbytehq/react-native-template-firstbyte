import React from 'react';
import {connect} from 'react-redux';

import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {logout} from 'ReactNativeStarterKit/src/reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    width: '100%',
    flex: 0.5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    position: 'absolute',
    top: -75,
    borderWidth: 4,
    borderColor: 'white',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
    //marginBottom: 40
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#c71847',
    borderWidth: 0.5,
    borderColor: '#c71847',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    //marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  details: {
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
  },
});

const image = {uri: 'https://placeimg.com/640/480/people'};

const Profile = ({fullName, logout}) => {
  return (
    <ImageBackground source={image} style={styles.container} blurRadius={2}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{fullName}</Text>
        <View style={styles.row}>
          <Icon name="map-pin" size={20} color="red" />
          <Text style={styles.details}>
            California State University Long Beach, USA
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" size={20} color="grey" />
          <Text style={styles.details}>+1 - 1234567890</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = ({user}) => ({fullName: user.fullName});

export default connect(mapStateToProps, {logout})(Profile);
