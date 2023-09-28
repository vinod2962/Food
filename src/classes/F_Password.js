import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import css from '../stylesheets/css';
import VerifyButton from '../components/VerifyButton';
import ButtonComp from '../components/ButtonComp';

export default function F_Password(props) {
  return (
    <SafeAreaView style={css.backgroundSplash1}>
      <TouchableOpacity onPress={() => props.navigation.navigate('LoginPage')}>
        <Image
          style={{
            height: 30,
            width: 25,
            tintColor: '#787E7E',
            marginLeft: 10,
            marginTop: 5,
          }}
          source={require('../images/less.png')}
        />
      </TouchableOpacity>
      <View
        style={{
          alignSelf: 'center',
          paddingHorizontal: 40,
          marginTop: 130,
        }}>
        <View
          style={{
            marginTop: 30,
          }}>
          <Text style={css.fp_1_Text}>Forgot Password</Text>
        </View>
        <View>
          <Text style={css.fb_2_Text}>
            {' '}
            Select which contact details should we use to reset your password.
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <VerifyButton
            title="Email"
            text1="Send to your email"
            Image={require('./../images/msg.png')}
          />

          <VerifyButton
            title="Phone number"
            text1="Send to your Phone number"
            Image={require('./../images/call.png')}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Verify_Code')}>
            <ButtonComp title="Continue" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
