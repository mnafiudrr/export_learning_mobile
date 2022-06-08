import { View, Text } from 'react-native';
import React from 'react';
import AppView from '~/app/core/component/AppView';

export default function Home() {
  return (
    <AppView withSafeArea>
      <View>
        <Text>Home</Text>
      </View>
    </AppView>
  )
}