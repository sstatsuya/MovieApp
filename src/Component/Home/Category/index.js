import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CategoryImg from '../../../assets/img/category1.gif';

const Category = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.categoryImg} source={CategoryImg} />
      <View style={styles.textWrapper}>
        <Text style={styles.categoryText}>Action</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
