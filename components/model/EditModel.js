import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodDescription: ''
        };
    }

    showEditModal = (editingFood, flatListItem) => {
        console.log(`eidtingFood = ${JSON.stringify(editingFood)} `);
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem
        })
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
                    alert("Update completed!");
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
                    onChangeText={(text) => this.setState({ foodName: text })}
                    placeholder="Enter new food's name"
                    value={this.state.foodName}>

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
                    onChangeText={(text) => this.setState({ foodDescription: text })}
                    placeholder="Enter new food's description"
                    value={this.state.foodDescription}>

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
                        if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        //Update existing Food
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if(foundIndex < 0){
                            return;//not found
                        }
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        //Refresh flatlist item
                        this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}>
                    Save
            </Button>
            </Modal>
        );
    }
}
