import React from 'react';
import {Dimensions, Text, View} from 'react-native';

export default function PersonalUserDetails(props) {
  return (
    <View
      style={{
        alignSelf: 'center',
        marginTop: 5,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: '#484A4A',
          marginTop: 5,
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          borderColor: '#208C5A',
          height: 34,
          width: Dimensions.get('screen').width * 0.9,
          fontSize: 19,
          //   alignItems: 'center',
          paddingLeft: 10,
          paddingTop: 5,
          backgroundColor: 'white',
          marginTop: 2,
          borderRadius: 5,
          overflow: 'hidden',
          // paddingBottom: 5,
        }}>
        {props.info}
      </Text>
    </View>
  );
}
