/**
 * Le Duy Khánh
 */

 import React, {Component} from 'react';
 import { View } from 'react-native';

 export default class FixedDimension extends Component{
     render(){
         return(
             // View hiển thị theo cột
             <View>
                <View style={ {width:150, height:150, backgroundColor: 'red'} }></View>
                <View style={ {width:150, height:150, backgroundColor: 'green'} }></View>
                <View style={ {width:150, height:150, backgroundColor: 'pink'} }></View>
             </View>
         )
     }
 }