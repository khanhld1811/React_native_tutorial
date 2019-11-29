import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HelloWorldApp extends Component {
    constructor(){
        super()
        this.state = {
            number: 0
        };
        var i = 0;
        
        var taskToDo = () => {
            i++;
            /**
             * previousSate là trạng thái lúc chưa thay đổi
             */
           this.setState(previousState => {
               // return về trạng thái đã thay đổi
                return{
                    name:previousState.number + i
                };
           });
        };
        const timeToBlink = 1000;//1000 miliseconds
        /**
         * setinterval -> Thự hiện hành động sau 1 khoảng thời gian nào đó
         */
        setInterval(taskToDo,timeToBlink);

    }
    
    componentWillUpdate(){

    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <HelloWorld name={this.state.name}>Hello, world!</HelloWorld>
        </View>
      );
    }
  }

class HelloWorld extends Component {
    constructor(){
        super()
        console.log("contructor")
    }
    componentDidUpdate (){
        console.log("componentDidUpdate");
    }
    render() {
        console.log("render")
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, {this.props.name}!</Text>
        </View>
      );
    }
  }


