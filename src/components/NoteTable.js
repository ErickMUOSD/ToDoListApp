
import React from "react";
import {StyleSheet, View} from "react-native";
import Note from "./Note";

export default function NoteTable(props) {

    const {data} = props

    return(
        <View style={style.grid}>
            {data.map((item) => <Note item={item.title} content={item.content} /> )}
        </View>
    )
}

const style = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flexWrap: "wrap"

    },

})