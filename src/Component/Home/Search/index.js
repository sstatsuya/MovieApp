import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {styles} from './styles';
import SearchImg from '../../../assets/img/category1.gif';
import Movie1 from '../../../assets/img/movie_banner1.gif';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../../Constant/Styles';

const Search = props => {
  const searchRef = useRef();
  const history = [
    'Frozen',
    'Điều kỳ diệu ở phòng giam số 13',
    'Doraemon',
    'Mahouka koukou rettousei',
  ];
  return (
    <View style={{flex: 1, backgroundColor: Colors.colorPrimary}}>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <FontAwesomeIcon icon={faSearch} size={24} color={'white'} />
          <TextInput
            ref={searchRef}
            onLayout={() => searchRef.current.focus()}
            style={styles.searchInput}
            placeholder="Search movie name..."
            placeholderTextColor="white"
          />
        </View>

        {/* History list */}
        <Text style={styles.historyTitle}>History</Text>
        <View style={styles.history}>
          <TouchableOpacity style={styles.historyItem}>
            <Text style={styles.historyText}>Ahihi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyItem}>
            <Text style={styles.historyText}>Ahihi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyItem}>
            <Text style={styles.historyText}>Ahihi</Text>
          </TouchableOpacity>
        </View>

        {/* Search movie */}
        <Text style={styles.historyTitle}>Searched Movies</Text>
        <View style={styles.searchedMovie}>
          <ScrollView>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchedMovieItem}>
              <View style={styles.searchedMovieBanner}>
                <Image style={styles.searchedMovieImg} source={Movie1} />
                <Text style={styles.year}>2013</Text>
              </View>
              <View style={styles.searchedMovieDesc}>
                <Text style={styles.name}>Phi vụ thế kỷ</Text>
                <Text
                  style={styles.desc}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim
                  kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về
                  Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ phim kể về Bộ
                  phim kể về Bộ phim kể về Bộ phim
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Search;
