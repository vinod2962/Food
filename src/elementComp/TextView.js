import React from 'react';
import {Text, View} from 'react-native';

export default function TextView(props) {
  return (
    <View>
      <Text
        style={{
          fontFamily: props.fontF,
          fontSize: props.fontS,
          color: props.fontC,

          marginTop: props.topM,
          marginBottom: props.bottomM,
          marginLeft: props.leftM,
          marginRight: props.rightM,
          marginHorizontal: props.hMargin,
          marginVertical: props.vMargin,

          paddingTop: props.leftP,
          paddingBottom: props.bottomP,
          paddingLeft: props.leftP,
          paddingRight: props.rightp,
          paddingHorizontal: props.hPadding,
          paddingVertical: props.vPadding,
        }}>
        {props.text}
      </Text>
    </View>
  );
}
