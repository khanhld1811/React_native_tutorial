import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexExample extends Component {
    render() {
        return (
            <View style={{
                height: 500,
                flexDirection: 'column',
                margin: 20,
                backgroundColor:'#0099ff',
                justifyContent:"flex-end",
                // justifyContent:"flex-end",
                // justifyContent:"space-between",
                // justifyContent:"space-around",
                // justifyContent:"center",
                alignItems: 'flex-end'
            }
            }>
                <Text style={{ width: 50, height: 50, backgroundColor: 'red'}} />
                <Text style={{ width: 50, height: 50, backgroundColor: 'green'}} />
                <Text style={{ width: 50, height:50, backgroundColor: 'blue' }} />
            </View>
        );
    }
};