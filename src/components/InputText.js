import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

export default function InputText(props) {
  const {myData} = props;
  return (
    <View>
      <Text
        style={{
          marginTop: 14,
          fontSize: 16,
        }}>
        {props.title}
      </Text>

      <TextInput
        onChangeText={myData}
        placeholder={props.holder}
        value={props.value}
        style={{
          paddingVertical: 2,
          width: 280,
          borderBottomColor: '#208C5A',
          borderBottomWidth: 1,
          alignSelf: 'center',
          marginTop: 3,
          height: 24,
        }}
      />

      {/* fff */}
    </View>
  );
}
