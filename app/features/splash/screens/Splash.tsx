import {CompositeNavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppView from '~/app/core/component/AppView';

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
  },
  footer: {
    padding: Platform.OS === 'android' ? wp(3) : (heightScreen < 700 ? wp(2) : 0),
    fontSize: wp(100) < 600 ? wp(3.8) : wp(100) < 700 ? wp(2.8) : wp(2),
    color: 'white',
    textAlign: 'center',
  },
});

export default function Splash({navigation}: {navigation: CompositeNavigationProp<any, any>}) {

  return (
    <AppView withSafeArea withHeader={false}>
        <Text>
          test Up
        </Text>
    </AppView>
  );
}
