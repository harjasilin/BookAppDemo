import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  wrap: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  padding: { padding: 20 },
  image: {
    height: 150,
    width: '30%',
    borderRadius: 20,
    resizeMode: 'cover'
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
  wd: { width: '55%' },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.1,
  },
  subtat: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.1,
  },
  desc: {
    fontSize: 18,
    color: 'black',
    
    marginTop: 10,
  },
  input: {
    height: 100,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 15,
    marginTop: 10,
  },
  rating: {
    fontSize: 18,
    color: 'black',
    
    marginTop: 10,
  },
  imgrat: { paddingVertical: 15, gap: 10 },
  btnText: { fontSize: 18, color: 'white' }
})