import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonComp(props) {
  return (
    <View
      style={{
        height: 40,
        width: Dimensions.get('screen').width * 0.75,
        backgroundColor: 'black',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.3,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 17,
          alignSelf: 'center',
          paddingTop: 9,
          fontWeight: '400',
        }}>
        {props.title}
      </Text>
    </View>
  );
}
