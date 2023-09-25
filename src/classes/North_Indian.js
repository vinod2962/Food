import React, {useContext, useEffect} from 'react';
import {Button, Image, Text} from 'react-native';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function North_Indian(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>Image lodaer</Text>

        <FastImage
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
          }}
          source={{
            uri: 'https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_1200m_africa_s_labeled.png',
          }}
          resizeMode={'contain'}
        />

        <Image
          style={{
            height: 200,
            width: 200,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
          source={{
            uri: 'https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_1200m_africa_s_labeled.png',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
