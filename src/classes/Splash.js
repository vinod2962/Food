import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Button, Image, LogBox} from 'react-native';
import css from '../stylesheets/css';

import I18n from 'react-native-i18n';
import AsyncStorage from '@react-native-community/async-storage';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function Splash(props) {
  useEffect(() => {
    getData();
    setTimeout(() => {
      props.navigation.navigate('Main');
    }, 1000);
  });

  const getData = async () => {
    await AsyncStorage.getItem('img');
    const colorL = await AsyncStorage.getItem('languageSelected');

    // if (colorL == '' || colorL == undefined || colorL == null) {
    //   I18n.locale = 'en';
    // } else {
    //   I18n.locale = colorL;
    // }
    {
      colorL ? (I18n.locale = colorL) : (I18n.locale = 'hi');
    }
  };

  return (
    <SafeAreaView style={css.backgroundSplash}>
      <View>
        <Image style={css.imageLogo} source={require('./../images/logo.png')} />
        <Text style={css.splashText}>Foo|Dzzzi</Text>
      </View>
    </SafeAreaView>
  );
}
