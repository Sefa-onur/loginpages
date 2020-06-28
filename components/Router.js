import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import Login from './Login';
import Create from './Create';
import Mainpage from './Mainpage';

var firebaseConfig = {
  apiKey: "###############",
  authDomain: '#################',
  databaseURL: "######################",
  projectId: "####################",
  storageBucket: "#####################",
  messagingSenderId: "#############",
  appId: "#################",
  measurementId: "##############"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

class Router extends Component {
  state = {
    route: undefined
  }
  async componentDidMount() {

    await AsyncStorage.getItem('userLogin').then(item => {
      if (item != undefined)
        this.setState({ route: item })

    })

  }
  render() {
    console.log(this.state.route)
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={null} >
          {
            this.state.route == undefined ?
              <>
                <Stack.Screen name='Giriş' component={Login} />
                <Stack.Screen name='Yapıcı' component={Create} />
              </>
              :
              null
          }
          <Stack.Screen name='Mainpage' component={Mainpage} />
          <Stack.Screen name='QuitLogin' component={Login} />
          <Stack.Screen name='QuitCreate' component={Create} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Router;