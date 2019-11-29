import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: 20,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 300
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert("Model closed");
                }}>

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 30
                }}>
                    new food's infomation
            </Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newFoodName: text })}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}>

                </TextInput>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newFoodDescription: text })}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDescription}>

                </TextInput>
                <Button
                    style={{
                        fontSize: 18,
                        color: 'white'
                    }}
                    containerStyle={{
                        padding: 0,
                        marginLeft: 70,
                        marginRight: 70,
                        marginTop:15,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://picsum.photos/200/300",
                            foodDescription: this.state.newFoodDescription
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}>
                    Save
            </Button>
            </Modal>
        );
    }
}
