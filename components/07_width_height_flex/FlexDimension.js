import React, { Component } from 'react';
import { View } from 'react-native';


export default class FixedDimension extends Component {
    render() {
        return (
            // View hiển thị theo cột
            <View style={{ flex: 1 }}>
                <View style={{ flex: 20, backgroundColor: 'lightblue' }} />
                <View style={{ flex: 20, backgroundColor: 'lightgreen' }} />
                <View style={{ flex: 60, backgroundColor: 'darkslategrey' }} />
            </View>
        )
    }
}