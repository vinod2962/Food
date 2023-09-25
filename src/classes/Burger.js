import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function Burger(props) {
  const [number, setNumber] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text>Enter your phone No.</Text>
        <PhoneInput
          defaultValue={number}
          defaultCode="IN"
          //   onChangeText={setNumber}
          onChangeFormattedText={val => setNumber(val)}
        />

        <TouchableOpacity
          onPress={() => Alert.alert('your number :- ', number)}
          style={{
            borderColor: 'black',
          }}>
          <Text>Get Phone No.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
