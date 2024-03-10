import { StyleSheet } from "react-native";

export const Style=StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue', 

    },
    wrap:{margin: 10,backgroundColor:'white',padding:10,elevation:2},
    inside:{  flexDirection: 'row', alignItems: 'center', gap: 10, },
    img:{ height: 80, width: '25%', borderRadius: 20, resizeMode: 'cover', },
    second:{ width: '55%' },
    flow:{ color: 'black', fontWeight: 'bold', fontSize: 17, letterSpacing: 0.1 },
    flow2:{color: 'black',  fontSize: 17, letterSpacing: 0.1 },
    star:{ flexDirection: 'row', gap: 5,marginTop:20 }
})