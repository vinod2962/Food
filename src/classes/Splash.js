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
  });

  const getData = async () => {
    await AsyncStorage.getItem('img');

    const colorL = await AsyncStorage.getItem('languageSelected');
    let login = await AsyncStorage.getItem('login');

    {
      colorL ? (I18n.locale = colorL) : (I18n.locale = 'en');
    }

    setTimeout(async () => {
      myStaus();
    }, 1000);
  };
  const myStaus = async () => {
    let status = await AsyncStorage.getItem('status');
    props.navigation.replace(status == 'true' ? 'Main' : 'LoginPage');
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
