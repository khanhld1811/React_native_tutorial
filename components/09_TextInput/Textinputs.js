import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';

export default class TextInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeText: 'please type your text',
            typePassword: 'please type your password',
            typeDiscription:''
        }
    }

    componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState(() => {
                return{typeText: 'Keyboard is shown'}
            });
        });
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState(() => {
                return{typeText: 'Keyboard hide'}
            });
        });
    }

    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidShowListener.remove();
    }

    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    placeholderTextColor='red'
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typeText: text
                                    };
                                }
                            );
                        }
                    }
                />
                <Text style = {{ marginLeft: 20 }}>{this.state.typeText}</Text>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    placeholderTextColor='blue'
                    secureTextEntry={true}// Bảo mật text 
                    returnKeyType='go'
                    onSubmitEditing={Keyboard.dismiss} 
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typePassword: text
                                    };
                                }
                            );
                        }
                    }
                />
                <Text style = {{ marginLeft: 20 }}>{this.state.typePassword}</Text>

                <TextInput
                    style={{height:100,
                    margin:20,
                    padding:10,
                    borderColor: 'gray',
                    borderWidth:1} }
                    
                    multiline={true}
                    borderBottomColor='green'
                    borderBottomWidth={3}
                    borderLeftColor='green'
                    borderLeftWidth={3}
                    borderRightColor='green'
                    borderRightWidth={3}
                    editable={true}
                    autoFocus={true}
                    
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typeDiscription: text
                                    };
                                }
                            );
                        }
                    }
                ></TextInput>
            </View>
        )
    }
}