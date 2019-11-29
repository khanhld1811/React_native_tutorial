import React, { Component } from 'react'
import {
    View, Alert, StyleSheet, Image, Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

export default class Buttons extends Component {
    _onPressButton = () => {
        Alert.alert("Do you")
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    // Hiện hightlight màu đỏ khi nhấn button
                    underlayColor='red'
                    // Khi giữ button
                    onShowUnderlay={() => {
                        alert("onShowUnderlay button !");
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'green'
                        }}>
                        <Text style={{
                            color: 'white',
                            padding: 20,
                            fontSize: 18
                        }}>
                            TouchableHightLight
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    // Mầu nền của component cha chứa nó
                    useForeground={true}>
                    <View style={{
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'blue'
                    }}>

                        <Text style={{
                            margin: 10,
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center'
                        }}>

                            TouchableNativeFeedback

                            </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity
                    onPress={this._onPressButton}
                    activeOpacity={0.7}>
                    <View style={{
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'red'
                    }}>

                        <Text style={{
                            margin: 10,
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center'
                        }}>

                            TouchableNativeFeedback

                            </Text>
                    </View>
                </TouchableOpacity>

                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                    onLongPress={() => {
                        alert("onLongPress")
                    }}
                    onPressIn={() => {
                        alert("onPressIn");
                    }}
                    onPressOut={() => {
                        alert("onPressOut");
                    }}
                    disabled={false}
                >
                    <View style={{
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'pink'
                    }}>

                        <Text style={{
                            margin: 10,
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center'
                        }}>

                            TouchableNativeFeedback

                            </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}