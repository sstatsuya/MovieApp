import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MovieImg from '../../../assets/img/movie1.gif';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../../../Constant/Styles';

const Movie = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      props.navigation.navigate("Movie", {})
    }}>
      <Image source={MovieImg} style={styles.movieImg} />
      <Text style={styles.name}>Frozen</Text>
      <View style={styles.starWrapper}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return <FontAwesomeIcon key={index} color={Colors.colorGold} icon={faStar} size={16} style={{marginHorizontal: 1}}/>;
        })}
        <Text style={styles.rate}>5.0</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;
