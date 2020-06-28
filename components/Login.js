import React,{Component} from 'react';
import { View, Text, TextInput,StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Button from './Button';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
        email:'',
        password:'',
        loading:false
        }
    }
    singIn = () => {
        if (this.state.password, this.state.email == '') {
            Alert.alert('E-mail ve Şifre Girmelisiniz')
        } else {
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
            this.setState({
                 loading : true
            })
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            let email = this.state.email
            let password = this.state.password
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    AsyncStorage.setItem('userLogin', 'true')
                    this.props.navigation.navigate('Mainpage')
                })
                .then(() => this.setState({ loading: false }))
                .catch(() => Alert.alert('email yada şifre hatalı'))
                .then(() => this.setState({ loading: false }))
        }
    }
    sorgu = () => {
        if (this.state.loading == false) {
            return <Button title={'Giriş Yap!'} onpress={this.singIn} />
        } else {
            return <Loading />
        }
    }
    render() {
        return(
            <View style={styles.Conteiner}>
                <View style={styles.InputView}>
                    <TextInput
                        placeholder='E-mail'
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.InputView}>
                    <TextInput
                        placeholder='Password'
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    {this.sorgu()}
                </View>
                <View style={styles.Info} >
                    <View style={styles.Info1}>
                        <Text>
                            Bir Hesabınız Yokmu!
                  </Text>
                    </View>
                  <View style={styles.Info2}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Yapıcı')}>
                            <Text style={{ color: 'red' }}>
                                Kayıt Ol!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputView: {
        borderWidth: 1,
        width: 310,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 15,
    },
    Info: {
        flexDirection: 'row',
        marginTop: 5
    },
    Info1: {
        marginLeft: 10
    },
    Info2: {
        marginLeft: 20
    }
})