import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {addToFavorite, removeFromFavorite} from '../../action/action';
import {useDispatch, useSelector} from 'react-redux';
import {
  Back,
  FavIcon,
  FavIconFilled,
  Star,
  StarFilled,
} from '../../asset/icons/svg';
import {useNavigation} from '@react-navigation/native';
import {Style} from './detailScreenStyle';

const DetailScreen = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const dataList = route?.params?.data;
  const image = route?.params?.imageUri;
  const favorites = useSelector(state => state.book.favorites);
  const isFavorite = favorites?.includes(dataList?._version_.toString());

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(dataList._version_.toString()));
    } else {
      dispatch(addToFavorite(dataList._version_.toString()));
    }
  };

  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starType = i < rating ? 'colored' : 'faded';
      stars.push(
        starType === 'colored' ? (
          <StarFilled key={i} height={25} width={25} />
        ) : (
          <Star key={i} height={25} width={25} />
        ),
      );
    }

    return stars;
  };

  return (
    <ScrollView style={Style.container}>
      <Pressable style={{marginTop: 20}} onPress={() => navigation.goBack()}>
        <Back height={25} width={25} />
      </Pressable>
      {dataList?.cover_i ? (
        <Image source={{uri: image}} style={Style.image} />
      ) : (
        <Image
          style={Style.image}
          source={require('../../asset/images/cover_not_found.jpg')}
        />
      )}

      <View style={Style.wrapper}>
        <View style={Style.inside}>
          <Text style={Style.title} numberOfLines={2}>
            {dataList?.title}
          </Text>
          <View style={Style.inside2}>
            <TouchableOpacity onPress={toggleFavorite}>
              {isFavorite ? (
                <FavIconFilled height={30} width={30} />
              ) : (
                <FavIcon height={30} width={30} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={Style.authName}>{dataList?.author_name?.join(' , ')}</Text>
        <View style={Style.star}>
          <View style={Style.insideStar}>
            {renderStars(parseInt(dataList?.ratings_average))}
          </View>
          <Pressable
            style={Style.press}
            onPress={() =>
              navigation.navigate('ReviewScreen', {
                data: dataList,
                image: image,
              })
            }
            >
            <Text style={Style.addReview}>Add Review</Text>
          </Pressable>
        </View>
        {dataList?.first_sentence && (
          <Text style={Style.desc}>{dataList?.first_sentence}</Text>
        )}
        {dataList?.type && <Text style={Style.type}>{dataList?.type}</Text>}

        <Text style={Style.type}>
          Total edition : {dataList?.edition_count}
        </Text>
        <Text style={Style.type}>{dataList?.number_of_pages_median} Pages</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
