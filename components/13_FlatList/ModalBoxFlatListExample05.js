import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from '../model/AddModel';
import EditModal from '../model/EditModel';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            }
        });
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, derection) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        // alert('Update');
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this)
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSetting}>
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
                        height: 1,
                        backgroundColor: 'white'
                    }}>

                    </View>
                </View>
            </Swipeout>
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


export default class ModalBoxFlatListExample05 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deleteRowKey: null
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: activeKey
            }
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.ANDROID === 'android' ? 34 : 0 }}>
                <View style={{
                    backgroundColor: 'orangered',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor="orangered"
                        onPress={this._onPressAdd}>
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../Imgae/plus.png')}>

                        </Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={"flatList"}
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        console.log(`Item ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem
                                item={item} index={index} parentFlatList={this}>
                                    
                            </FlatListItem>
                        );
                    }}>
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>
        );
    }
}