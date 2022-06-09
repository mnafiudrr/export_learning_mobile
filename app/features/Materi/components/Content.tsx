import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextContent from '~/app/core/component/AppTextContent'
import AppVideoContent from '~/app/core/component/AppVideoContent';
import AppImageContent from '~/app/core/component/AppImageContent';

type contentProps = {
  contents: Array<Object>,
}

const dummy_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const dummy_image = 'https://via.placeholder.com/400x400.png/0077ff?text=animals+veritatis';
const dummy_video = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

export default function Content({contents}: contentProps) {
  return (
    <View>
      <AppVideoContent url={dummy_video}/>
      <AppImageContent uri={dummy_image}/>
      <AppVideoContent url={dummy_video}/>
      {contents.map((item, index) => <AppTextContent key={index} value={dummy_text} />)}
    </View>
  )
}

const styles = StyleSheet.create({})