import React, { Component } from 'react';
import { ScrollView, Image, Text, View, TextInput, Dimensions } from 'react-native';

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                // Khi vừa bắt đầu scroll
                onMomentumScrollBegin={() => {
                    // alert('Begin scrolling');
                }}
                onMomentumScrollEnd={() => {
                    // alert('Begin end');
                }}
                onScroll={(event) =>{
                    let logData = `Scrolled to x  = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
                    console.log(logData);
                }}
                scrollEventThrottle={10}
                >
                <View style={{
                    backgroundColor: '#0099ff',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}>
                                    Screen 1
                    </Text>
                </View>

                <View style={{
                    backgroundColor: '#663399',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}>
                                    Screen 2
                    </Text>
                </View>

                <View style={{
                    backgroundColor: 'green',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}>
                                    Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}