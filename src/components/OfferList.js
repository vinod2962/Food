import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function OfferList(props) {
  const {pizza_click} = props;

  return (
    <View
      style={{
        borderColor: '#208C5A',
        borderWidth: 0.2,
        borderRadius: 5,
        marginHorizontal: 10,
        // marginVertical:5,
        marginTop: 10,
        flex: 1,
        backgroundColor: 'white',

        marginBottom: 2,
      }}>
      <TouchableOpacity onPress={() => pizza_click(props.name)}>
        <Image
          style={{
            height: 90,
            width: 120,
            alignSelf: 'center',
            resizeMode: 'stretch',
            marginTop: 4,
          }}
          source={props.image}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '600',
            paddingBottom: 2,
          }}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
// Cheese Pizza
