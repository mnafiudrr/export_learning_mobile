import {CompositeNavigationProp} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppView from '~/app/core/component/AppView';
import { showLoading } from '~/app/core/utils/loader';
import HomeScreen from '../../home/config/Screens';

const heightScreen = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFooter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    paddingBottom: wp(5),
    width: wp(50),
    height: wp(10),
  },
  footer: {
    padding: Platform.OS === 'android' ? wp(3) : (heightScreen < 700 ? wp(2) : 0),
    fontSize: wp(100) < 600 ? wp(3.8) : wp(100) < 700 ? wp(2.8) : wp(2),
    color: 'grey',
    textAlign: 'center',
    marginTop: wp(2),
  },
  loader: {
    marginTop: wp(5),
  }
});

export default function Splash({navigation}: {navigation: CompositeNavigationProp<any, any>}) {

  useEffect(() => {
    // showLoading(true);
    setTimeout(() => {
      // showLoading(false);
      HomeScreen.HOME.navigate(navigation);
    }, 3000);
  }, []);
  

  return (
    <AppView withSafeArea withHeader={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={{ uri:'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png' }}/>
      </View>
      <View style={styles.containerFooter}>
        <ActivityIndicator style={styles.loader} size={'large'} color={'grey'} />
        <Text style={styles.footer}>Loading ...</Text>
      </View>
    </AppView>
  );
}
