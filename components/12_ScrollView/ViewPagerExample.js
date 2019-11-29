import React, { Component } from 'react';
import { ScrollView,StyleSheet, Image, Text, View, TextInput, Dimensions } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
export default class ViewPagerExample extends Component{
    render(){
        return(
            <ViewPager
                style={{flex:1}}
                 initialPage={0}
                 
                 // Gọi khi scroll
                 onPageScroll={(event) => {
                    //  console.log(`offset = ${event.nativeEvent.offset}`)
                 }}

                 // Gọi khi chạm tay scroll và bỏ tay ra khỏi màn hình
                 onPageScrollStateChanged={(state) => {
                     console.log(`scrolling state = ${state}`)
                 }}

                 // Gọi khi chuyển trang xong
                 onPageSelected={(event) => {
                     console.log(`Scrolled to page: ${event.nativeEvent.position}`)
                 }}
                 >

                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text style={styles.textStyle}>
                        Screen 1
                    </Text>
                </View>
                <View style={{backgroundColor:'palevioletred'}}>
                    <Text style={styles.textStyle}>
                        Screen 2
                    </Text>
                </View>
                <View style={{backgroundColor:'salmon'}}>
                    <Text style={styles.textStyle}>
                        Screen 3
                    </Text>
                </View>
                
            </ViewPager>
        );
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        fontSize:20,
        padding:15,
        color:'white',
        textAlign:'center'
    }
});