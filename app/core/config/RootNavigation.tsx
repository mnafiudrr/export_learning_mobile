/* eslint-disable no-nested-ternary */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashNavigation from '~/app/features/splash/config/Navigation';

const Root = createStackNavigator();

function listScreen() {
  return [
    ...SplashNavigation.getNavigation(Root),
  ];
}

function RootNavigation() {

  return (
      <Root.Navigator>
        {listScreen()}
        {/* {ModalNavigation.getNavigation(Root)} */}
      </Root.Navigator>
  );
}

export default RootNavigation;
