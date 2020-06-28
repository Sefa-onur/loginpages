import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import Button from './Button';
import Loading from './Loading';

class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            loading:false
        }
    }
    
    create = () => {
        if(this.state.email,this.state.password == '') {
            Alert.alert('E-mail yada Şifre Boş Olmamalı')
        }else{
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
              if(!firebase.apps.length){
                firebase.initializeApp(firebaseConfig);
              } 
              this.setState({loading:true}) 
              let email = this.state.email;
              let password = this.state.password;
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(() => this.props.navigation.navigate('Mainpage'))
            .then(() => this.setState({loading:false}))
            .catch(() => Alert.alert('bir hata oluştu'))
            .then(() => this.setState({loading:false}))
        } 
    }
    sorgu = () => {
        if( this.state.loading == false) {
            return(
                <Button title = {'Kayıt Ol!'} onpress = {this.create.bind(this)} />
            )
        }else{
            return(
                <Loading/>
            )
        }
    }
    render() {
        return(
            <View style = {styles.Container}>
               <View style = {styles.InputView}>
                 <TextInput
                 placeholder = 'E-mail'
                 onChangeText = {text => this.setState({email:text})}
                 value = {this.state.email}
                 keyboardType = 'email-address'
                 />
            </View>
            <View style = {styles.InputView}>
                 <TextInput
                 placeholder = 'Password'
                 onChangeText = {text => this.setState({password:text})}
                 value = {this.state.password}
                 secureTextEntry = {true}
                 />
            </View>
            <View style = {styles.View} />
            <View>
                {this.sorgu()}
            </View>
            </View>
        )
    }
} 

export default Create;

const styles = StyleSheet.create({
    Container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    InputView:{
            borderWidth:1,
            width:310,
            borderRadius:10,
            marginBottom:20,
            paddingLeft:15
    },
    View:{
        borderWidth:1,
        marginBottom:20,
        marginTop:1,
        width:320,
        borderColor:'#c0c0c0',
        borderRadius:10
    }
})

