import React, {Component} from 'react';
import {View,Text} from 'react-native';

class Greeting extends Component{
    render(){
        let  greetingString = `Hello ${ this.props.name }.`
        return(
        <Text>{ greetingString }</Text>
        );
    }
}

export default class MultipleGreetings extends Component{
    render(){
        return(
            <View
                style = { {alignItems: 'center'}}>
                <Greeting name="Le Duy Khanh"></Greeting>
                <Greeting name="Join"></Greeting>
            </View>
        );
    }
}