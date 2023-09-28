import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function FoodType(props) {
  // const {cat_click}=props
  return (
    <TouchableOpacity
      onPress={() => [
        props.cat_click(props.index),
        props.click_Me(props.foodtypes),
      ]}>
      <Text
        style={{
          color: props.color,
          fontSize: 17,
          fontWeight: '500',
          borderWidth: 0.4,
          borderColor: '#208C5A',
          paddingVertical: 7,
          alignSelf: 'flex-start',
          paddingHorizontal: 13,
          borderRadius: 5,
          marginHorizontal: 6,
          // marginVertical:6,
          marginTop: 10,
          marginBottom: 1,
          // backgroundColor:'#208C5A',
          backgroundColor: props.bg,
          overflow: 'hidden',
        }}>
        {props.foodtypes}
      </Text>
    </TouchableOpacity>
  );
}
