import React, {useState} from 'react';
import {Text, View, TextInput, Dimensions, Platform} from 'react-native';

export default function InputText(props) {
  const {myData} = props;
  return (
    <View>
      <Text
        style={{
          marginTop: 9,
          fontSize: 15,
        }}>
        {props.title}
      </Text>

      <TextInput
        onChangeText={myData}
        placeholder={props.holder}
        value={props.value}
        style={{
          width: Dimensions.get('screen').width * 0.75,
          borderBottomColor: '#208C5A',
          borderBottomWidth: 1,
          alignSelf: 'center',
          marginTop: 1,
          fontSize: 13,
          color: 'black',
          height: 30,

          paddingBottom: Platform.OS == 'ios' ? null : -10,
          paddingTop: Platform.OS == 'ios' ? null : -10,
        }}
      />

      {/* fff */}
    </View>
  );
}
