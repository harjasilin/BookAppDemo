import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from "react-redux";
import HeaderComponent from "../../component/headerComponent";
import { Card } from "../../component/card/card";
import { Style } from "./favoriteScreenStyle";

const FavoriteScreen = ({ navigation }) => {
    const text_Color = '#1f1f5d'
    const favorites = useSelector((state) => state.book.favorites)
    const bookData = useSelector((state) => state.book.books)
     const filterdBooks = bookData?.docs.filter(item => favorites?.includes(item?._version_.toString()));

    return (
        <ScrollView style={Style.container}>
            <HeaderComponent title={'MY FAVORITE'} />
            {filterdBooks.length > 0 ? (
                <View style={Style.wrapper}>
                    {
                        filterdBooks.map((movie, index) => (
                            <Card data={movie} key={index} />
                        ))
                    }

                </View>
            ) : (
                <View style={Style.noCard}>
                    <Text style={Style.text1}>No data present!!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
                        style={Style.btn}>
                        <Text style={{ color: text_Color }}>Go to Home Screen</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    )
}
export default FavoriteScreen
