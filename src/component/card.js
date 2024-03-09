import React from "react";
import { TouchableOpacity, View, Text, Image, Platform } from "react-native";
import { FavIcon } from "../asset/icons/svg";
export const Card = ({data}) => {
    return (
        <TouchableOpacity>
            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%', }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'red',
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
                    }
                    }
                >

                    <Image style={{ height: 150, width: '100%', borderRadius: 20, resizeMode: 'cover', }}
                        source={{ uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800' }} />
                </View>
                <View style={{ width: '60%' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, letterSpacing: 0.1 }}
                        numberOfLines={1}>
                        {data?.title}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, letterSpacing: 0.1 }}
                        numberOfLines={1}>
                        {data?.author_name}</Text>

                    <Text style={{ fontSize: 15, marginTop: 7, color: 'black' }}>2012, Published by me</Text>
                    <View style={{ marginTop: 10 }}>
                        <FavIcon height={30} width={30} />
                        {/* <FavIconFilled height={30} width={30}/> */}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}