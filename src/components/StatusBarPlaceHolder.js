import React from 'react';
import { View, StatusBar, Dimensions } from 'react-native';

export default class StatusBarPlaceHolder extends React.Component{
    render(){
        return(
            <View style={{width: Dimensions.get('window').get, height: 20 }}>
                <StatusBar barStyle="light-content"/>
            </View>
        );
    }
}