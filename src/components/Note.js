import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native";

export default function Note(props) {
    const {title, content, deleteItem, id} = props

    const removeItem = () => deleteItem(id)
    return (
        <View style={style.card}>

            <Text style={style.content}>{title}</Text>
            <Text>{content}</Text>
            <TouchableWithoutFeedback onPress={removeItem}>
                <Text style={style.delete}>Delete</Text>
            </TouchableWithoutFeedback>
        </View>

    )
}


const style = StyleSheet.create({
    card: {

        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 10,
        width: "40%",

    },
    content: {
        fontWeight: "bold",
        color: "black",
        fontSize: 18,
        marginBottom: 5,

    },
    textMarked: {
        textDecorationLine: "line-through"
    },
    delete: {
        textAlign: "right",
        color: "yellow",
        marginTop: 5
    }


})
