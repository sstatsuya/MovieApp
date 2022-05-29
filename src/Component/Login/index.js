import {View, Text, Image, TouchableOpacity, TextInput, Animated} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from './styles';
import BgImg from '../../assets/img/bg.gif';
import TitleImg from '../../assets/img/title.gif';
import {Styles} from '../../Constant/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';

const Login = props => {
  var titleX = new Animated.Value(-400);
  var formX = new Animated.Value(400);
  useEffect(() => {
    Animated.timing(titleX, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
    Animated.timing(formX, {
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

      <Animated.View style={[styles.titleWrapper, { transform: [{ translateX: titleX }] }]}>
        <Image source={TitleImg} style={styles.titleImg} />
        <Text style={styles.title}>Watch movie</Text>
        <Text style={styles.title}>Everywhere</Text>
      </Animated.View>

      <Animated.View style={[styles.formWrapper, { transform: [{ translateX: formX }] }]}>
        <View style={Styles.inputWrapper}>
          <FontAwesomeIcon icon={faUser} size={20} color={'white'} />
          <TextInput
            style={Styles.input}
            placeholder="Type your username"
            placeholderTextColor="#999"
          />
        </View>
        <View style={Styles.inputWrapper}>
          <FontAwesomeIcon icon={faLock} size={20} color={'white'} />
          <TextInput
            style={Styles.input}
            placeholder="Type your password"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.btnForgot}>
          <Text style={styles.textForgot}>Forgot password?</Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity style={[Styles.btn, styles.btn]} activeOpacity={0.4} onPress={()=>{
        props.navigation.navigate("Home",{})
      }}>
        <Text style={Styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
