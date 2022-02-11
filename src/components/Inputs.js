import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import IoIcon from 'react-native-vector-icons/Ionicons';

export default function Inputs(props) {
    const {getData} = props
    const [inputData, setInputData] = useState({title: "", content: ""})
    const sendData = () =>   getData(inputData)
    const handleChange = (name, value) => {
        setInputData({
            ...inputData,
            [name]: value,
        });

    };
   // const randomId =() => Math.random().toString(36).slice(2)
    return (
        <View style={style.card}>
            <TextInput
                style={style.input}
                placeholder="Title"
                onChangeText={(text) => handleChange('title', text)}
                value={inputData.title}/>
            <TextInput
                placeholder="Take a note..."
                onChangeText={(text => handleChange('content', text))}
                value={inputData.content}/>
            <TouchableWithoutFeedback onPress={sendData}>
                <View style={style.icon}>
                    <IoIcon name="add" size={25}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

import Icon from 'react-native-ionicons'


const style = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        elevation: 10,

    },
    input: {
        margin: 0
    },
    icon: {
        position: "absolute",
        right: 10,
        bottom: -15,
        backgroundColor: "yellow",
        height: 40,
        width: 40,
        borderRadius: 20,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center"

    },
    text: {
        color: "white",
        fontWeight: "bold"
    }

})