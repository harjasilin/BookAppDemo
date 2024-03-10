import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  Animated,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Card} from '../../component/card/card';
import Slider from '../../component/sliderComponent/slider';
import {Style} from './homeStyle';

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const books = useSelector(state => state.book.books);
  const bookList = books?.docs;
  const [filteredBooks, setFilteredBooks] = useState(bookList);
  const [fadeAnim] = useState(new Animated.Value(0));
  const handleSearch = searchText => {
    setSearchQuery(searchText);
    let text = searchText?.toLowerCase();

    if (searchText.trim()) {
      const filteredData = bookList?.filter(function (item) {
        return item?.title?.toLowerCase().includes(text);
      });
      setFilteredBooks(filteredData);
    } else {
      setFilteredBooks(bookList);
    }
  };
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // Adjust animation duration
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={Style.container}>
      <ImageBackground
        source={require('../../asset/images/about-img.jpg')}
        style={Style.imgBag}>
        <Animated.Text
          style={[
            Style.header,
            {
              opacity: fadeAnim,
            },
          ]}>
          Explore Thousands of Books at Your Fingertips with{' '}
          <Text style={{color: 'red', fontWeight: '700'}}>Book.com</Text>
        </Animated.Text>
        <TextInput
          placeholder="Start typing..."
          placeholderTextColor={'black'}
          value={searchQuery}
          onChangeText={handleSearch}
          style={Style.input}
        />
      </ImageBackground>
      
      <ScrollView>
        <Animated.View style={Style.mt}>
          <Slider />
        </Animated.View>
        <View style={{}}>
          {filteredBooks?.map((book, index) => (
            <Card data={book} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
