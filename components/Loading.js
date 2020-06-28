import React from 'react';
import {View, Text, ActivityIndicator,StyleSheet } from 'react-native';

const Loading = () => {
    return(
        <View style = {styles.View}>
            <ActivityIndicator size = 'large'/>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    View:{
        borderWidth:1,
        width:310,
        borderRadius:10,
        height:50,
        position:'relative',
        justifyContent:'center',
        alignItems:'center',

    }
})