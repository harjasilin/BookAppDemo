import { StyleSheet,Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Library } from '../asset/icons/svg';
import { HomeScreen } from '../screens/homeScreen';

const Tab = createBottomTabNavigator();
const Navigation = () => {
    
    return (

        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
              backgroundColor: 'white',
              borderRadius: 50 / 2,
              position: 'absolute',
              elevation: 2,
              padding: 10,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopColor: 'transparent',
              marginBottom: 20,
              marginHorizontal: 10,
              tabBarShadow: {
                shadowColor: 'black',
                shadowOffset: {
                  width: -30,
                  height: 10,
                },
                shadowOpacity: 2,
                shadowRadius: 5,
              },
              borderTopWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderTopColor: 'rgba(0,0,0,0.1)',
              borderRightColor: 'rgba(0,0,0,0.2)',
              borderBottomColor: 'rgba(0,0,0,0.2)',
              borderLeftColor: 'rgba(0,0,0,0.1)',
            },
          }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                       <Library width={35} height={35} />
                    ),
                    tabBarLabel: () => (
                        <Text style={{marginBottom: 5, color: 'black'}}>
                          {'hi'}
                        </Text>
                      ),
                }}
            />
            {/* <Tab.Screen
                name="SearchScreen"
                component={authenticatedUser ? SearchScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                }}
            /> */}
            {/* <Tab.Screen
                name="FavoriteListScreen"
                component={authenticatedUser ? FavoriteListScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color} />
                    ),
                }}
            /> */}
            {/* <Tab.Screen
                name="WatchListScreen"
                component={authenticatedUser ? WatchListScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping-cart" size={size} color={color} />
                    ),
                }}
            /> */}
            {/* <Tab.Screen
                name="ProfileScreen"
                component={authenticatedUser ? ProfileScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={size} color={color} />
                    ),
                }}
            /> */}

        </Tab.Navigator>

    );
};

export default Navigation;

const styles = StyleSheet.create({});