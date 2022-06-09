import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Visible from './Visible'
import YoutubePlayer from "react-native-youtube-iframe";

type AppVideoContentProps = {
  url: string,
}

const dummy_video = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

export default function AppVideoContent({url}: AppVideoContentProps) {
  
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.containerVideo}>
        <YoutubePlayer
          height={wp(45)}
          width={wp(80)}
          play={playing}
          videoId={(url??dummy_video).replace('https://www.youtube.com/watch?v=', '')}
          onChangeState={onStateChange}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  containerVideo: {
    alignItems: 'center',
    paddingVertical: wp(2),
  },
})