import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import HeaderComponent from '../../component/headerComponent';
import {useRoute} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import {addReview} from '../../action/reviewAction';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { Style } from './reviewStyle';

export const ReviewScreen = () => {
  const route = useRoute();
  const image = route?.params?.image;
  const [desc, setDesc] = useState('');
  const data = route?.params?.data;
  const title = data?.title;
  const author_name = data?.author_name;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const handleRating = rating => {
    setRating(rating);
  };
  const handleAdd = () => {
    if (!desc || !rating) {
      Alert.alert('Please enter each filed.');
      return;
    }
    const user = {
      desc,
      rating,
      image,
      title,
      author_name,
    };
    dispatch(addReview(user));
    navigation.navigate('HelpScreen');
  };
  return (
    <ScrollView style={Style.container}>
      <HeaderComponent title={'Add Review'} />
      <View style={Style.padding}>
        <View
          style={Style.wrap}>
          {data?.cover_i ? (
            <Image
              style={Style.image}
              source={{uri: image}}
            />
          ) : (
            <Image
            style={Style.image}
              source={require('../../asset/images/cover_not_found.jpg')}
            />
          )}
          <View style={Style.wd}>
            <Text
              style={Style.title}
              numberOfLines={1}>
              {title}
            </Text>
            <Text
              style={Style.subtat}
              numberOfLines={2}>
              {author_name?.join(' , ')}
            </Text>
          </View>
        </View>
        <Text
          style={Style.desc}>
          Description :
        </Text>
        <TextInput
          placeholder="Enter Description"
          placeholderTextColor={'black'}
          numberOfLines={3}
          multiline
          value={desc}
          onChangeText={e => setDesc(e)}
          style={Style.input}
        />
        <Text
          style={Style.rating}>
          Your rating :
        </Text>
        <Rating
          onFinishRating={handleRating}
          style={Style.imgrat}
          imageSize={30}
          startingValue={rating}
          ratingBackgroundColor="red"
        />

        <TouchableOpacity onPress={handleAdd} style={Style.button}>
          <Text style={Style.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

