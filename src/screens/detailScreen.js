import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { useRoute } from '@react-navigation/native';
import { addToFavorite, removeFromFavorite, } from "../action/action";
import { useDispatch, useSelector } from "react-redux";
import { FavIcon, FavIconFilled, Star, StarFilled } from "../asset/icons/svg";
import { useNavigation } from "@react-navigation/native";
const DetailScreen = ({ }) => {
const navigation=useNavigation();
    const route = useRoute();
    const dispatch = useDispatch()
    const dataList = route?.params?.data;
    const image = route?.params?.imageUri;
    const favorites = useSelector((state) => state.book.favorites)
    const isFavorite = favorites?.includes(dataList?._version_.toString());
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(dataList._version_.toString()));
        } else {
            dispatch(addToFavorite(dataList._version_.toString()));
        }
    };
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {

            const starType = i < rating ? 'colored' : 'faded';
            stars.push(
                starType === 'colored' ? (
                    <StarFilled key={i} height={25} width={25} />
                ) : (
                    <Star key={i} height={25} width={25} />
                )
            );
        }


        return stars;
    };
    return (
        <ScrollView style={styles.container}>
            {dataList?.cover_i ?
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                /> :
                <Image style={styles.image}
                    source={require('../asset/images/cover_not_found.jpg')}
                />}

            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#1f1f5d', fontSize: 30, width: '80%' }} numberOfLines={2}>
                        {dataList?.title}
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <TouchableOpacity onPress={toggleFavorite}>
                            {isFavorite ? <FavIconFilled height={30} width={30} /> :
                                <FavIcon height={30} width={30} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ color: 'black', fontSize: 17 }}>{dataList?.author_name?.join(' , ')}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        {renderStars(parseInt(dataList?.ratings_average))}
                    </View>
                    <Pressable style={{ flexDirection: 'row', gap: 5,fontSize:16 }} onPress={()=>navigation.navigate('ReviewScreen',{data:dataList,image:image})}>
                        <Text style={{ textDecorationLine: 'underline', color: 'black' }}>Add Review</Text>
                    </Pressable>
                </View>
                {dataList?.first_sentence &&
                    <Text style={{ color: '#1f1f5d', fontSize: 18, marginTop: 10, marginBottom: 20 }}>
                        {dataList?.first_sentence}
                    </Text>
                }
                {dataList?.type && <Text style={{ color: 'black', fontSize: 15 }}>{dataList?.type}</Text>}

                <Text style={{ color: 'black', fontSize: 15 }}>Total edition : {dataList?.edition_count}</Text>
                <Text style={{ color: 'black', fontSize: 15 }}>{dataList?.number_of_pages_median} Pages</Text>

            </View>

        </ScrollView>
    )
}

export default DetailScreen;
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        marginBottom: 20
    }
});