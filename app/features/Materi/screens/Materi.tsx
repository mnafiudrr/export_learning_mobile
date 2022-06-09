import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppView from '~/app/core/component/AppView'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { URL_MATERI } from '~/app/service/ApiServices'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AppContents from '~/app/core/component/AppContents'
import Visible from '~/app/core/component/Visible'
import AppHeaderImage from '~/app/core/component/AppHeaderImage'

type MateriProps = {
  route?: any
}

const dummy_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const dummy_image = 'https://via.placeholder.com/400x400.png/0077ff?text=animals+veritatis';

export default function Materi({route}: MateriProps) {
  const navigation = useNavigation<CompositeNavigationProp<any, any>>();
  const [dataMateri, setDataMateri] = useState({
    id: '',
    title: '',
    logo: '',
    header: '',
  })
  const [contents, setContents] = useState([
    {
      content_type_id: 1,
      value: '',
    }
  ]);
  const [subMateris, setSubMateris] = useState([
    {

    }
  ])

  useEffect(() => {
    getMateri(route.params.id);
  },[]);

  const getMateri = async (id: string) => {
    try {
      const response = await axios({
        method: 'get',
        url: `${URL_MATERI}/${id}`,
      });
      if(response.data) {
        const response_data = response.data.data;
        
        setDataMateri({
          id: response_data.id,
          title: response_data.title,
          logo: response_data.logo,
          header: response_data.header,
        });
        setContents(response_data.contents);
        setSubMateris(response_data.sub_materis);
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppView withSafeArea>
      <AppHeaderImage uri={dataMateri.header} />
      <Text style={styles.title}>
        {dataMateri.title}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <AppContents contents={contents} />
        </View>
      </ScrollView>
    </AppView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
  },
  header: {
    width: wp(100),
    height: wp(20),
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginTop: wp(5),
    marginHorizontal: wp(5),
  },
  contentText: {
    fontSize: wp(4),
    textAlign: 'justify',
  }
})