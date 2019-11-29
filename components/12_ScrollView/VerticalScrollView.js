import React, { Component } from 'react';
import { ScrollView, Image, Text, View, TextInput, Dimensions } from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let screenWith = Dimensions.get('window').width;
        return (
            <ScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{paddingLeft:20}}
                >
                    {/* Image */}
                <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    {/* Text */}
                <Text
                    style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'green'
                    }}>
                    This is a text
                 </Text>
                 {/* TextInput */}
                <TextInput
                    style={{
                        padding: 10, margin: 10, borderWidth: 1
                    }}
                    placeholder="Enter text">
                </TextInput>

                    {/* View */}
                <View
                style={{backgroundColor:'red', height:50}}>
                    <Text
                    style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Text inside a view
                    </Text>
                </View>
                <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    <Image source={require('../Imgae/button.png')}
                    style={{ width: screenWith, height: screenWith * 1024 / 1024, marginTop: 20 }} />
                    
            </ScrollView>
        );
    }
}