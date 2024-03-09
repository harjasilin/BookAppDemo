import React, { useEffect } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { Card } from "../component/card";
export const HomeScreen = () => {
    const books = useSelector((state) => state.book.books)
    console.log(books.docs[0], 'bookdata++++++++++')

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'lightblue', padding: 10 }}>
            <TextInput placeholder="Start typing..."
                placeholderTextColor={'black'}
                style={{
                    height: 45, width: '95%', alignSelf: 'center', backgroundColor: 'white',
                    borderRadius: 10,
                    fontSize: 15,
                    paddingStart: 10,
                    marginTop: 20
                }} />
                <View style={{margin:10}}>
                    {books?.docs.map((book,index)=>(
                        <Card data={book} key={index}/>
                    ))}
                </View>
           
        </ScrollView >
    )
}