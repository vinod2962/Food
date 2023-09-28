import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, Image, TouchableOpacity, NativeModules} from 'react-native';

export default function LanguageBox(props) {
  const {click} = props;
  return (
    <TouchableOpacity onPress={() => click(props.data.code)}>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          width: 350,
          borderColor: 'black',
          borderWidth: 0.2,
          // borderRadius: 10,
          marginVertical: 5,
          backgroundColor: 'white',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 22,
            paddingLeft: 10,
          }}>
          {props.data.Language}
        </Text>

        <Image
          style={{
            height: 25,
            width: 25,
            alignSelf: 'center',
            tintColor: props.tnColor,
            marginRight: 20,
          }}
          source={require('../images/radioButton.png')}
        />
      </View>
    </TouchableOpacity>
  );
}
