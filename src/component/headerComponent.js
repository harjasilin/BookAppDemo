import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
const HeaderComponent = ({ title }) => {
    const text_Color = '#1f1f5d'


    return (
        <View style={styles.page}>
            <Text style={styles.text}>{title}</Text>
        </View>

    )
}
export default HeaderComponent
const styles = StyleSheet.create({
    page: {
        marginTop: 20, alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f1f5d'
    }

});