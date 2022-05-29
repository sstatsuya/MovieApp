import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MovieImg from '../../../assets/img/movie1.gif';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../../Constant/Styles';
import User1Img from '../../../assets/img/user1.gif';

const Comment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={User1Img} style={styles.avatar} />
        <Text style={styles.name}>Leonardo da Vinci Fan </Text>
      </View>
      <Text style={styles.date}>12h30 01/01/2022</Text>
      <Text style={styles.content}>
        I like this movie so much. I like this movie so much. I like this movie
        so much. I like this movie so much. I like this movie so much. I like
        this movie so much. I like this movie so much. I like this movie so
        much. I like this movie so much.
      </Text>
    </View>
  );
};

export default Comment;
