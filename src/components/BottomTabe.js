import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function BottomTabe(props) {
  const {tabClick} = props;
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 14,
        marginTop: 5,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity onPress={() => tabClick(props.index)}>
        <Image
          style={{
            height: 20,
            width: 20,
            tintColor: props.index == props.displayIndex ? '#208C5A' : 'black',
            alignSelf: 'center',
            marginTop: 5,
          }}
          source={props.Image}
        />

        <Text
          style={{
            color: props.index == props.displayIndex ? '#208C5A' : 'black',
            fontSize: 13,
            alignSelf: 'center',
            marginBottom: -2,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
