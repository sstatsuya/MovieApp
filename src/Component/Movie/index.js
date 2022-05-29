import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import Movie1Img from '../../assets/img/movie_splash.gif';
import {Colors, Styles} from '../../Constant/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStar,
  faDownload,
  faShare,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Movie = props => {
  const actors = [
    {
      id: 1,
      name: 'Harry Potter',
    },
    {
      id: 2,
      name: 'Cristiano Ronaldo',
    },
    {
      id: 3,
      name: 'Lionel Messi',
    },
    {
      id: 4,
      name: 'Doraemon',
    },
    {
      id: 5,
      name: 'Nobita',
    },
    {
      id: 6,
      name: 'Uchiha Naruto',
    },
  ];
  return (
    <ScrollView style={styles.svWrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Movie1Img} style={styles.movieImg} />
          <View style={styles.movieNameWrapper}>
            <Text style={styles.name}>Frozen</Text>
            <Text style={styles.category}>Drama, Cartoon, 3D</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.watchBtn}
          onPress={() => {
            props.navigation.navigate('Watch', {});
          }}>
          <Text style={styles.watchBtnText}>Watch</Text>
        </TouchableOpacity>

        <View style={styles.controlWrapper}>
          <TouchableOpacity style={styles.controlBtn}>
            <FontAwesomeIcon icon={faDownload} color={'#999'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn}>
            <FontAwesomeIcon icon={faHeart} color={'#999'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn}>
            <FontAwesomeIcon icon={faShare} color={'#999'} size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionWrapper}>
          <View style={styles.rateItemWrapper}>
            <View style={styles.rateItemLeft}>
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    color={Colors.colorGold}
                    icon={faStar}
                    size={16}
                    style={{marginHorizontal: 1}}
                  />
                );
              })}
            </View>
            <Text style={styles.rateItemRight}>5.0</Text>
          </View>
          <View style={styles.rateItemWrapper}>
            <Text style={styles.rateItemLeft}>IMDb</Text>
            <Text style={styles.rateItemRight}>8.7</Text>
          </View>
        </View>

        <View style={styles.sectionWrapper}>
          <Text style={styles.info}>2018 | USA | 1h45min</Text>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemTitle}>Description</Text>
            <Text style={styles.description}>
              The film depicts a princess who sets off on a journey alongside an
              iceman, his reindeer, and a snowman to find her estranged sister,
              whose icy powers have inadvertently trapped their kingdom in
              eternal winter...
            </Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemTitle}>Director</Text>
            <View style={styles.persons}>
              <TouchableOpacity style={[styles.person, {marginVertical: 0, marginHorizontal: 0}]} >
                <Text style={styles.personName}>Tien Minh</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemTitle}>Cast</Text>
            <View style={styles.persons}>
              {actors.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.person} key={index}>
                    <Text style={styles.personName}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Movie;
