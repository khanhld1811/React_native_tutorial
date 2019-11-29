import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Alert, Platform, TouchableHighlight, ImageBackground, TouchableOpacity } from 'react-native';
import {horizontalStatus} from '../data/HorizontalFlatListData';
import {horizontalFlatListData} from '../data/HorizontalFlatListData';
import Icon from 'react-native-vector-icons/Ionicons'
class HorizontalFlatListItem {
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                width:90,
                borderRadius: 10,
                borderWidth:1,
                borderColor:'grey',
                margin:4

            }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'white',
                    margin:20
                }}>
                    {this.props.item.hour}
                </Text>
                <Icon
                style={(Platform.ANDROID === 'android') ? this.props.item.status.android: this.props.item.status.ios}/>
                <Text style={{
                    fontSize:16,
                    margin:10,
                    color:'white'
                }}>
                    {this.props.item.degrees} F
                </Text>
            </View>
        );
    }
}

export default class HorizontalFlatList extends Component {
    render() {
        return (
            <View
                stle={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTip: Platform.ANDROID === 'android' ? 0 : 34
                }}>
                <View style={{ height: 150 }}>
                    <FlatList style={{
                        backgroundColor:'black',
                        opacity:0.5
                    }}
                    horizontal={true}
                    data={horizontalFlatListData}
                    renderItem={({item, index}) => {
                        return(
                            <HorizontalFlatList item={item} index={index} parentFlatList={this}>

                            </HorizontalFlatList>
                        );
                    }}>

                    </FlatList>
                </View>
            </View>
        );
    }
}