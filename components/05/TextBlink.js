import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {
            showText: false
        };
        // Hàm thực hiện một công việc
        var taskToDo = () => {
            /**
             * previousSate là trạng thái lúc chưa thay đổi
             */
           this.setState(previousState => {
               // return về trạng thái đã thay đổi
                return{
                    showText:!previousState.showText
                    
                };
           });
        };
        const timeToBlink = 1000;//1000 miliseconds
        /**
         * setinterval -> Thự hiện hành động sau 1 khoảng thời gian nào đó
         */
        setInterval(taskToDo,timeToBlink);
    }
    render(){
        console.log(this.state.showText);
        let textToDisplay = this.state.showText ? this.props.inputText : ' ';
        return(
            <Text>{textToDisplay}</Text>
        );
    }
}

export default class TextBlink extends Component{
    render(){
        return(
            <View>
                <Blink inputText='Hello, What your name?'></Blink>
                <Blink inputText="My name is khanh"></Blink>
            </View>
        );
    }
}