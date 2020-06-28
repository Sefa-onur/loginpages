import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    return(
        <View style = {styles.View}>
            <TouchableOpacity onPress = {props.onpress} style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style = {styles.Text}>
                   {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    View:{
        borderWidth:1,
        width:310,
        borderRadius:10,
        height:50,
        position:'relative',
    }
})