import React, { useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import HeaderComponent from "../../component/headerComponent";
import { useSelector } from "react-redux";
import { Star, StarFilled } from "../../asset/icons/svg";
import { Style } from "./helpStyle";

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
        <ScrollView style={Style.container}>
            <HeaderComponent title={'View Review'} />
            {reviews.map((data)=>(
                <View style={Style.wrap}>
                <View style={Style.inside}>
                    {data?.image!=='https://covers.openlibrary.org/b/id/undefined.jpg'?
                    <Image style={Style.img}
                            source={{ uri: data?.image }}
                        /> :
                        <Image style={Style.img}
                        source={require('../../asset/images/cover_not_found.jpg')}
                    />}
                        
                        
                    <View style={Style.second}>
                    <Text style={Style.flow}
                            numberOfLines={1}>
                            {data?.title}</Text>
                        
                            </View>
                </View>
                <Text style={Style.flow2}>
                    Description : {data?.desc}
                </Text>
                <View style={Style.star}>
                        {renderStars(parseInt(data?.rating))}
                    </View>
                </View>
            ))}
            
            
        </ScrollView>
    )
}
