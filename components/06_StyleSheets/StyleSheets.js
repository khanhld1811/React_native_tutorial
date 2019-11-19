import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StyleSheets extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.firstText}>First line</Text>
                <Text style={styles.secondText}>Second line</Text>
                <Text style={styles.firstText, styles.secondText}>First, second</Text>
                <Text style={styles.secondTex,styles.firstText}>Second, first</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#28B463'
    },
    firstText: {
        margin: 5, color: 'white'
    },
    secondText:{
        margin:5,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize:20,
    }
});