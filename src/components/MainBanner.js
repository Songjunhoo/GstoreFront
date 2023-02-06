import {React} from 'react';
import Swiper from 'react-native-swiper';
import {View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
});

function MainBanner() {
  return (
    <View>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image
            source={require('react_native_04/assets/images/superman.jpg')}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={require('react_native_04/assets/images/superman.jpg')}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={require('react_native_04/assets/images/superman.jpg')}
          />
        </View>
      </Swiper>
    </View>
  );
}

export default MainBanner;
