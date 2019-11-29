import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'green'
                }}>
                    <Image
                        source={{ uri: this.props.item.imageUrl }}
                        style={{ width: 100, height: 100, margin: 5 }} />

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.flatListItem}>
                            {this.props.item.name}
                        </Text>
                        <Text style={styles.flatListItem}>
                            {this.props.item.foodDescription}
                        </Text>
                    </View>
                </View>

                <View style={{
                    height:1,
                    backgroundColor:'white'
                }}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
})


export default class FlatListExample01 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
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