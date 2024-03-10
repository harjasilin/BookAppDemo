import { StyleSheet } from "react-native";

export const Style=StyleSheet.create({
    container:{flex: 1, backgroundColor: 'lightblue'},
    imgBag:{height: 150, opacity: 0.8},
    header:{textAlign: 'center',
    fontSize: 22,
    color: 'black',
    backgroundColor: 'gray'},
    input:{
        height: 45,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            fontSize: 15,
            paddingStart: 10,
            marginTop: 20,
    },
    mt:{marginTop: 10}
})