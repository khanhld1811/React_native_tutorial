import React, { Component } from 'react'
import { View } from 'react-native';
import Button from 'react-native-button';

export default class Buttons extends Component {
    _onPressButton = () =>{
        Alert.alert("Do you")
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button
                    style={ {
                        fontSize:15,
                        color:'white',
                        backgroundColor:'green',
                        padding:20,
                        borderRadius:30,
                        shadowRadius:20,
                        shadowOpacity:0.5
                    } }

                    onPress={this._onPressButton}
                >
                    This is button
                </Button>

            </View>
        )
    }
}