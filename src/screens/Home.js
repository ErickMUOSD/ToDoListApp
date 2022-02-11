import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Note from "../components/Note";
import Inputs from "../components/Inputs";
import NoteTable from "../components/NoteTable";


export default function Home() {
    const [data, setData] = useState([])

    // const getItems = (items) =>setData([...data, ...[items]])
    const getItems = (items) =>setData(prevState =>  {
        return [...prevState,...[items] ]})

    const  deteleItem = (id) =>{
        const result = data.filter((item, index)=> index!==id)
        setData(result)
    }

    return (
        <ScrollView>
            <Inputs getData={getItems}/>
            {data && <View style={style.grid}>
                {data.map((item, index) =>
                    <Note
                        key={index}
                        id={index}
                        title={item.title}
                        content={item.content}
                        deleteItem={deteleItem}/>)}
            </View>}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    grid: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
})