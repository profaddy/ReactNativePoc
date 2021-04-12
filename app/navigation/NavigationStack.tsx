import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Signup from 'app/screens/Signup';
import Home from 'app/screens/Home';
import ProductDetails from 'app/screens/ProductDetails/ProductDetails';
import ForgotPassword from 'app/screens/ForgotPassword';

import ThemeController from '../components/ThemeController';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();
const AuthTab = createBottomTabNavigator();


const homeOptions = (isLoggedIn:boolean) => {return {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController isLoggedIn={isLoggedIn} />
};}

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthTab.Navigator>
      <AuthTab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel:"Login",
          fontSize:24,
          tabBarIcon: ({ color, size }) => (
            <Icon name="login" color={color} size={size} />
          ),
          headerTitle:"test",
          title:"test"
        }}
        navigationOptions={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController isLoggedIn={isLoggedIn}/>,
        }}
      />
      <AuthTab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarLabel:"Signup",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
          title:"test"
        }}
      />
      {/* <Stack.Screen name={ForgotPassword} component={ForgotPassword}/> */}
    </AuthTab.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen name="Home" component={Home} options={homeOptions} />
    <Stack.Screen name="Product Details" component={ProductDetails} options={homeOptions} />
  </LoggedInStack.Navigator>
);


const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <>
          <Stack.Screen
            name="Home"
            component={LoggedInNavigator}
            options={homeOptions}
          />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              headerTitle:"Login",
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController isLoggedIn={isLoggedIn}/>,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
