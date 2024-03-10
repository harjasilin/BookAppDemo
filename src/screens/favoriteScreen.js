import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from "react-redux";
import HeaderComponent from "../component/headerComponent";
import { Card } from "../component/card";
const FavoriteScreen = ({ navigation }) => {
    const text_Color = '#1f1f5d'
    const favorites = useSelector((state) => state.book.favorites)
    const bookData = useSelector((state) => state.book.books)
     const filterdBooks = bookData?.docs.filter(item => favorites?.includes(item?._version_.toString()));

    return (
        <ScrollView style={styles.container}>
            <HeaderComponent title={'MY FAVORITE'} />
            {filterdBooks.length > 0 ? (
                <View style={styles.wrapper}>
                    {
                        filterdBooks.map((movie, index) => (
                            <Card data={movie} key={index} />
                        ))
                    }

                </View>
            ) : (
                <View style={{ marginTop: '40%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>No data present!!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
                        style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, elevation: 10, marginTop: 10 }}>
                        <Text style={{ color: text_Color }}>Go to Home Screen</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    )
}
export default FavoriteScreen
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue'

    },
    page: {
        padding: 25, marginTop: 20
    },
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 20
    }

});