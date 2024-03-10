import React, { useEffect,useState } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { Card } from "../component/card";

export const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const books = useSelector((state) => state.book.books)
    const bookList=books?.docs
    const [filteredBooks, setFilteredBooks] = useState(bookList);
    const handleSearch = searchText => {
        setSearchQuery(searchText);
        let text = searchText?.toLowerCase();
        
        if (searchText.trim()) {
            const filteredData = bookList?.filter(function (item) {
                return item?.title?.toLowerCase().includes(text);
              });
              setFilteredBooks(filteredData);
        } else {
            setFilteredBooks(bookList);
        }
      };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'lightblue', padding: 10 }}>
            <Text style={{fontSize:20,color:'red',marginTop:10,fontWeight:'bold'}}>
                Hi Alex
            </Text>
            <Text style={{fontSize:20,color:'black',marginTop:5,fontWeight:'bold'}}>
                Keep Exploring
            </Text>
            <TextInput placeholder="Start typing..."
                placeholderTextColor={'black'}
                value={searchQuery}
                onChangeText={handleSearch}
                style={{
                    height: 45, width: '95%', alignSelf: 'center', backgroundColor: 'white',
                    borderRadius: 10,
                    fontSize: 15,
                    paddingStart: 10,
                    marginTop: 20
                }} />
                <View style={{}}>
                    {filteredBooks?.map((book,index)=>(
                        <Card data={book} key={index}/>
                    ))}
                </View>
           
        </ScrollView >
    )
}