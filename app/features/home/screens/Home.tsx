import { View, Text, Alert, Button, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AppView from '~/app/core/component/AppView';
import axios from 'axios';
import { URL_MASTER_APP_VIDEO, URL_MATERI } from '~/app/service/ApiServices';
import YoutubePlayer from "react-native-youtube-iframe";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Visible from '~/app/core/component/Visible';
import AppBox from '~/app/core/component/AppBox';
import MateriScreens from '../../Materi/config/Screens';
import {CompositeNavigationProp} from '@react-navigation/native';


export default function Home({navigation}: {navigation: CompositeNavigationProp<any, any>}) {

  const [appVideo, setAppVideo] = useState('');
  const [playing, setPlaying] = useState(false);
  const [materis, setMateris] = useState([{
    id: "1",
    title: 'Materi 1',
    logo: "https://via.placeholder.com/400x400.png/006622?text=animals+ut",
  }]);

  useEffect(() => {
    getVideo();
    getMateri();
  },[]);

  const getVideo = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: URL_MASTER_APP_VIDEO,
      });
      if(response.data) {
        const yt_id = response.data.replace('https://www.youtube.com/watch?v=', '');
        setAppVideo(yt_id);
        setPlaying(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getMateri = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: URL_MATERI,
      });
      if(response.data) {
        setMateris(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const movePage = ( id: string ) => {
    MateriScreens.MATERI.navigate(navigation, {id});
  }

  return (
    <AppView withSafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerVideo}>
          <Visible visible={!!appVideo}>
            <YoutubePlayer
              height={wp(50)}
              width={wp(75)}
              play={playing}
              videoId={appVideo}
              onChangeState={onStateChange}
            />
          </Visible>
          <Visible visible={!appVideo}>
            <View style={{ height:wp(50), width:wp(75), backgroundColor: 'grey' }}/>
          </Visible>
        </View>
        <View style={styles.container}>
          {
            materis.map((materi, index) => <AppBox key={index} title={materi.title} logo={materi.logo} onPress={() => movePage(materi.id)} />)
          }
        </View>
      </ScrollView>
    </AppView>
  )
}

const styles = StyleSheet.create({
  containerVideo: {
    // flex: 1,
    alignItems: 'center',
    padding: wp(5),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: wp(2),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerFooter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(1.5),
    backgroundColor: 'grey',
  },
  box: {
    width: wp(17.1),
    margin: wp(1),
    alignItems: 'center',
  }
});