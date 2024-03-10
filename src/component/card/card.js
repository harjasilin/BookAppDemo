import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../action/action';
import { FavIcon, FavIconFilled } from '../../asset/icons/svg';
import { Style } from './cardStyle';

export const Card = ({ data }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const imageUri = `https://covers.openlibrary.org/b/id/${data?.cover_i}.jpg`;
    const favorites = useSelector(state => state.book.favorites);
    const isFavorite = favorites?.includes(data?._version_.toString());
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(data._version_.toString()));
        } else {
            dispatch(addToFavorite(data._version_.toString()));
        }
    };
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('DetailScreen', { data: data, imageUri: imageUri })
            }>
            <View style={Style.con}>
                <View style={Style.cardWrap}>
                    {data?.cover_i ? (
                        <Image
                            style={Style.img}
                            source={{ uri: imageUri }}
                        />
                    ) : (
                        <Image
                            style={Style.img}
                            source={require('../../asset/images/cover_not_found.jpg')}
                        />
                    )}
                </View>
                <View style={Style.wd}>
                    <Text
                        style={Style.flow2}
                        numberOfLines={1}>
                        {data?.title}
                    </Text>
                    <Text
                        style={Style.flow}
                        numberOfLines={2}>
                        {data?.author_name?.join(' , ')}
                    </Text>

                    <Text style={Style.ed}>
                        {data?.first_publish_year}, Total edition {data?.edition_count}
                    </Text>
                    <View style={Style.mt}>
                        <TouchableOpacity onPress={toggleFavorite}>
                            {isFavorite ? (
                                <FavIconFilled height={30} width={30} />
                            ) : (
                                <FavIcon height={30} width={30} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
