import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import {
  LoginScreen,
  SignupScreen,
  ForgotPassword,
  Home,
  Search,
  Profile,
} from 'ReactNativeStarterKit/src/screens';
import reducer from 'ReactNativeStarterKit/src/reducer';

const store = createStore(reducer);

const Routers = ({isSignedIn}) => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Search') {
                iconName = 'search';
              } else {
                iconName = 'user';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#c2047f',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const RouterContainer = connect((state) => ({isSignedIn: state.isSignedIn}))(
  Routers,
);

const App = () => (
  <Provider store={store}>
    <RouterContainer />
  </Provider>
);

export default App;
