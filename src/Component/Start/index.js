import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import BgImg from '../../assets/img/bg.gif';
import TitleImg from '../../assets/img/title.gif';
import {Styles} from '../../Constant/Styles';

const Start = props => {
  var titleX = new Animated.Value(-400);
  useEffect(() => {
    Animated.timing(titleX, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [titleX]);
  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.overlay}></View>
      <Image source={BgImg} style={styles.bgImg} />

      <Animated.View
        style={[styles.titleWrapper, {transform: [{translateX: titleX}]}]}>
        <Image source={TitleImg} style={styles.titleImg} />
        <Text style={styles.title}>Watch movie</Text>
        <Text style={styles.title}>Everywhere</Text>
      </Animated.View>
      <TouchableOpacity
        style={[Styles.btn, styles.btn]}
        activeOpacity={0.4}
        onPress={() => {
          props.navigation.navigate('Login', {});
        }}>
        <Text style={Styles.btnText}>Let's go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;
