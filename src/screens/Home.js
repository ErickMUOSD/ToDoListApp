import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Note from "../components/Note";
import Inputs from "../components/Inputs";
import NoteTable from "../components/NoteTable";


export default function Home() {
    const [data, setData] = useState([])

    const getItems = (items) =>setData([...data, ...[items]])

    const  deteleItem = (id) =>{
        const result = data.filter((item, index)=> index!==id)
        setData(result)
    }

    return (
        <>
            <Inputs getData={getItems}/>
            {data && <View style={style.grid}>
                {data.map((item, index) => <Note key={index} id={index} title={item.title} content={item.content} deleteItem={deteleItem}/>)}
            </View>}
        </>
    )
}

const style = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
})