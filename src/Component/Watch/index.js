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
import BgImg from '../../assets/img/bg.gif';
import TitleImg from '../../assets/img/title.gif';
import {Styles} from '../../Constant/Styles';
import Toast from 'react-native-toast-message';
import VideoPlayer from 'react-native-video-player';
import MediaControls from 'react-native-video-controls';
import Video from 'react-native-video';
import MovieThumbImg from '../../assets/img/movie_thumb.png';
import Relations from './Relation';
import Comment from './Comment';

const Watch = props => {
  const MovieThumbImgUri = Image.resolveAssetSource(MovieThumbImg).uri;

  return (
    <View style={styles.container}>
      <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        controls={true}
        fullscreen={true}
        showDuration={true}
        disableControlsAutoHide={false}
        hideControlsOnStart={false}
        onTouchStart={() => {
          alert('touch');
        }}
        thumbnail={{
          uri: MovieThumbImgUri,
        }}
      />
      <ScrollView>
        <View style={[styles.section, styles.header]}>
          <Text style={styles.name}>Bunny in the field</Text>
          <Text style={styles.info}>2018 | USA | 1h45min</Text>
        </View>

        <View style={[styles.section, styles.descWrapper]}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.desc}>
            This movie is so good This movie is so good This movie is so good
            This movie is so good This movie is so good This movie is so good
            This movie is so good This movie is so good This movie is so good
            This movie is so good This movie is so good
          </Text>
        </View>

        <View style={[styles.section, styles.relation]}>
          <Text style={styles.sectionTitle}>Relations</Text>
          <ScrollView horizontal>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return <Relations key={index} />;
            })}
          </ScrollView>
        </View>

        <View style={[styles.section, styles.comments]}>
          <Text style={styles.sectionTitle}>Comments</Text>
          <TextInput
            style={styles.commentInput}
            placeholder={'Type your think about this movie'}
            placeholderTextColor="#999"
            multiline={true}
          />
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return <Comment key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Watch;
