/**
 * Create by Le Duy Khanh -> 11/19/2019
 * 
 */
import React, {Component} from 'react';
import { Text } from 'react-native';

export default class HelloWorld extends Component{
    render(){

        // let ng
        let greeting = `
        
        Hello world. My name is Le Duy Khanh`;
        return(
            <Text>{ greeting }</Text>
        );
    }
}