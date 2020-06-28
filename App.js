import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import Router from './components/Router';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router/>
        )
    }
}
    
export default App;

const styles = StyleSheet.create({
    View:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})