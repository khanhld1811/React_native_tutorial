import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'lightgreen' : 'tomato'
            }}>
                <Text style={styles.flatListItem}>
                    {this.props.item.key}
                </Text>
                <Text style={styles.flatListItem}>
                    {this.props.item.name}
                </Text>
                <Text style={styles.flatListItem}>
                    {this.props.item.foodDescription}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem:{
        color:'white',
        padding:10,
        fontSize:16
    }
})


export default class FlatListExample01 extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index}) => {
                        console.log(`Item ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem
                                item={item} index={index}>

                            </FlatListItem>
                        );
                    }}>

                </FlatList>
            </View>
        );
    }
}