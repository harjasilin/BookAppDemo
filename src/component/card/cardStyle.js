import {StyleSheet,Platform} from 'react-native';

export const Style = StyleSheet.create({
  con:{ margin: 10, flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%' },
  cardWrap:{
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
},
img:{
    height: 150,
    width: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  mt:{marginTop: 10},
  ed:{fontSize: 15, marginTop: 7, color: 'black'},
  flow:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.1,
  },
  flow2:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.1,
  },
  wd:{width: '60%'}
});
