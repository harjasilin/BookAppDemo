import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../action/action";
import { FavIcon, FavIconFilled } from "../asset/icons/svg";
export const Card = ({ data }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const imageUri = `https://covers.openlibrary.org/b/id/${data?.cover_i}.jpg`;
    const favorites = useSelector((state) => state.book.favorites)
    const isFavorite = favorites?.includes(data?._version_.toString());
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(data._version_.toString()));
        } else {
            dispatch(addToFavorite(data._version_.toString()));
        }
    };
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen' ,{ data: data,imageUri:imageUri })}>
            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%', }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        height: 150, width: '30%', borderRadius: 20,
                        ...Platform.select({
                            android: {
                                elevation: 20,
                            },
                            ios: {
                                shadowColor: '#000000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                            },
                        })
                    }}
                >
                    {data?.cover_i ?
                        <Image style={{ height: 150, width: '100%', borderRadius: 20, resizeMode: 'cover', }}
                            source={{ uri: imageUri }}
                        /> :
                        <Image style={{ height: 150, width: '100%', borderRadius: 20, resizeMode: 'cover', }}
                            source={require('../asset/images/cover_not_found.jpg')}
                        />}

                </View>
                <View style={{ width: '60%' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, letterSpacing: 0.1 }}
                        numberOfLines={1}>
                        {data?.title}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, letterSpacing: 0.1 }}
                        numberOfLines={2}>
                        {data?.author_name?.join(' , ')}</Text>

                    <Text style={{ fontSize: 15, marginTop: 7, color: 'black' }}>{data?.first_publish_year}, Total edition {data?.edition_count}</Text>
                    <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={toggleFavorite}>
                            {isFavorite ? <FavIconFilled height={30} width={30} /> :
                                <FavIcon height={30} width={30} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}