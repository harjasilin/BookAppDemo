import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux';
import { importBook } from "../action/action";

const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getBook()
        const timer = setTimeout(() => {
            navigation.replace('AnimTab1');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [navigation]);
    
    const getBook = () => {
        fetch("https://openlibrary.org/search.json?title=the+lord+of+the+rings")
            .then(res => res.json())
            .then(json => {
                dispatch(importBook(json));
            });
    }
    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="zoomIn"
                duration={3500}
                delay={1500}
                source={{uri:'https://cdn.dribbble.com/userupload/13347380/file/original-0c998bd099060f437151f8b4576bc143.png?resize=2048x1536'}}
                style={styles.image}
            />
        </View>
    )
}
export default SplashScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    image: {
        width: 500, height: 500
    },
});