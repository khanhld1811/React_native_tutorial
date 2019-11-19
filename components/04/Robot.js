import React , { Component } from 'react';
import { Image } from 'react-native';

export default class Robot extends Component{
    render(){
        const imageSource = {
            uri:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMZU2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570128716901"
        };
        return(
            <Image source={imageSource} style={{width:300, height:200}}></Image>
        );
    }
}