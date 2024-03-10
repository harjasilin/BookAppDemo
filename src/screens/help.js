import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import HeaderComponent from "../component/headerComponent";
import { useSelector } from "react-redux";
import { Star, StarFilled } from "../asset/icons/svg";
export const HelpScreen = () => {
    const reviews = useSelector((state) => state.review.reviews); 
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
            <HeaderComponent title={'View Review'} />
            {reviews.map((data)=>(
                <View style={{margin: 10,backgroundColor:'white',padding:10,elevation:2}}>
                <View style={{  flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                    {data?.image!=='https://covers.openlibrary.org/b/id/undefined.jpg'?<Image style={{ height: 80, width: '25%', borderRadius: 20, resizeMode: 'cover', }}
                            source={{ uri: data?.image }}
                        /> :<Image style={{ height: 80, width: '25%', borderRadius: 20, resizeMode: 'cover', }}
                        source={require('../asset/images/cover_not_found.jpg')}
                    />}
                        
                        
                    <View style={{ width: '55%' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, letterSpacing: 0.1 }}
                            numberOfLines={1}>
                            {data?.title}</Text>
                        
                            </View>
                </View>
                <Text style={{color: 'black',  fontSize: 17, letterSpacing: 0.1 }}>
                    Description : {data?.desc}
                </Text>
                <View style={{ flexDirection: 'row', gap: 5,marginTop:20 }}>
                        {renderStars(parseInt(data?.rating))}
                    </View>
                </View>
            ))}
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue', 

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