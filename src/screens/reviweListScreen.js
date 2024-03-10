import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity,Alert } from "react-native";
import HeaderComponent from "../component/headerComponent";
import { useRoute } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { addReview } from "../action/reviewAction";
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

export const ReviewScreen = ({ }) => {
    const route = useRoute();
    const image = route?.params?.image
    const [desc, setDesc] = useState('')
    const data = route?.params?.data;
    const title=data?.title;
    const author_name=data?.author_name
    const dispatch = useDispatch();
    const navigation=useNavigation();
    const [rating, setRating] = useState(0);
    const handleRating = (rating) => {
        setRating(rating);
    };
    const handleAdd = () => {
        if (!desc || !rating ) {
            Alert.alert('Please enter each filed.')
            return;
        }
        const user = {
            desc,
            rating,
            image,
            title,
            author_name
        }
        dispatch(addReview(user))
        navigation.navigate('HelpScreen')
    }
    return (
        <ScrollView style={styles.container}>
            <HeaderComponent title={'Add Review'} />
            <View style={{ padding: 20 }}>
                <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%' }}>
                    {data?.cover_i ?
                        <Image style={{ height: 150, width: '30%', borderRadius: 20, resizeMode: 'cover', }}
                            source={{ uri: image }}
                        /> :
                        <Image style={{ height: 150, width: '30%', borderRadius: 20, resizeMode: 'cover', }}
                            source={require('../asset/images/cover_not_found.jpg')}
                        />}
                    <View style={{ width: '55%' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, letterSpacing: 0.1 }}
                            numberOfLines={1}>
                            {title}</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, letterSpacing: 0.1 }}
                            numberOfLines={2}>
                            {author_name?.join(' , ')}</Text>
                            </View>
                </View>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 700, marginTop: 10 }}>Description :</Text>
                <TextInput placeholder="Enter Description"
                    placeholderTextColor={'black'}
                    numberOfLines={3}
                    multiline
                    value={desc}
                    onChangeText={(e) => setDesc(e)}
                    style={{
                        height: 100, width: '100%', alignSelf: 'center', backgroundColor: 'white',
                        borderRadius: 10,
                        fontSize: 15,
                        marginTop: 10
                    }} />
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 700, marginTop: 10 }}>Your rating :</Text>
                <Rating
                    onFinishRating={handleRating}
                    style={{ paddingVertical: 15, gap: 10 }}
                    imageSize={30}
                    startingValue={rating}
                    ratingBackgroundColor="red"
                />

                <TouchableOpacity
                    onPress={handleAdd}
                    style={
                        styles.button
                    }>
                    <Text style={{ fontSize: 18, color: 'white' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',

    },
    page: {
        padding: 25,
        marginTop: 20
    },
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 20
    },
    button: {
        backgroundColor: '#1f1f5d',
        height: 50, width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },

});