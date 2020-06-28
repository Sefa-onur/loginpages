import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import Button from './Button';

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
class Mainpage extends Component {
    constructor(props) {
        super(props);
    }
    async singout() {        
        await AsyncStorage.removeItem('userLogin')
        await this.props.navigation.navigate('QuitLogin')
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title={'Çıkış Yap!'} onpress={() => this.singout()} />
            </View>
        )
    }
}

export default Mainpage;