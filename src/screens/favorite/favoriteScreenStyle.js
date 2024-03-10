import { StyleSheet } from "react-native";

export const Style=StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: 'lightblue'

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
    },
    noCard:{ marginTop: '40%', alignItems: 'center' },
    text1:{ fontSize: 20 },
    btn:{ backgroundColor: 'white', padding: 10, borderRadius: 10, elevation: 10, marginTop: 10 }

    
})