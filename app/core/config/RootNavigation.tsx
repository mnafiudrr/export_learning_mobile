/* eslint-disable no-nested-ternary */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashNavigation from '~/app/features/splash/config/Navigation';
import HomeNavigation from '~/app/features/home/config/Navigation';
import MateriNavigation from '~/app/features/Materi/config/Navigation';

const Root = createStackNavigator();

function listScreen() {
  return [
    ...SplashNavigation.getNavigation(Root),
    ...HomeNavigation.getNavigation(Root),
    ...MateriNavigation.getNavigation(Root),
  ];
}

function splashScreen() {
  return [
    ...SplashNavigation.getNavigation(Root),
  ]
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
