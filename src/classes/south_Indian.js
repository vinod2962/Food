import React, {useContext, useEffect, useState} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Modal} from 'react-native';
import en from '../language/en';
import hi from '../language/hi';
import fr from '../language/fr';
// import i18n from "i18n-js"
// import LocalizedStrings from "react-native-localization";
import I18n from 'react-native-i18n';

I18n.fallback = true;

I18n.translations = {
  hi,
  en,
  fr,
};

export default function south_Indian(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>Localization</Text>
        <Text>{I18n.t('Name')}</Text>
        <Text>{I18n.t('welcome')}</Text>
      </View>
    </SafeAreaView>
  );
}
