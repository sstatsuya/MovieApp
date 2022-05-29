import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Banner1 from '../../assets/img/banner1.gif';
import Banner2 from '../../assets/img/banner2.gif';
import Banner3 from '../../assets/img/banner3.gif';
import Category from './Category';
import Movie from './Movie';

const Home = props => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText} numberOfLines={2}>
          What would you {'\n'}like to watch?
        </Text>
        <View style={styles.searchWrapper}>
          <FontAwesomeIcon icon={faSearch} size={24} color={'white'} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search movie name..."
            placeholderTextColor="white"
            onTouchStart={()=>props.navigation.navigate("Search",{})}
          />
        </View>

        {/* Slide movie */}
        <View style={styles.homeContent}>
          <Text style={styles.contentTitle}>Hot Movies</Text>
          <View style={styles.swiperWrapper}>
            <Swiper autoplay showsPagination={false} autoplayTimeout={2}>
              <Image style={styles.bannerImg} source={Banner1} />
              <Image style={styles.bannerImg} source={Banner2} />
              <Image style={styles.bannerImg} source={Banner3} />
            </Swiper>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.homeContent}>
          <Text style={styles.contentTitle}>Categories</Text>
          <ScrollView horizontal style={{width: '100%'}}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return <Category key={index} />;
            })}
          </ScrollView>
        </View>

        {/* Movies */}
        <View style={styles.homeContent}>
          <Text style={styles.contentTitle}>New Movies</Text>
          <View style={{width: '100%'}}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return <Movie key={index} navigation={props.navigation}/>;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
