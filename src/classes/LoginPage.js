import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert,
  filter,
} from 'react-native';
import css from '../stylesheets/css';
import InputText from '../components/InputText';
import ButtonComp from '../components/ButtonComp';
import ButtonGmailFacebook from '../components/ButtonGmailFacebook';
import AsyncStorage from '@react-native-community/async-storage';
import en from '../language/en';
import hi from '../language/hi';
import fr from '../language/fr';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast';

I18n.fallback = true;

I18n.translations = {
  hi,
  en,
  fr,
};

let usersDataList = [];
export default function LoginPage(props) {

  const toastAlert = val => {
    Toast.show(val, Toast.LONG, {
      backgroundColor: '#208C5A',
    });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginPage11 = () => {
    if (email === '') {
      Alert.alert('error', 'plz fill all fields');
    } else if (password === '') {
      Alert.alert('error', 'plz fill all fields');
    } else {
      getData();
      // props.navigation.navigate('Main');
    }
  };
  const getData = async () => {
    let users = await AsyncStorage.getItem('users');
    let parsedata = JSON.parse(users);
    usersDataList = [...parsedata];
    console.log(usersDataList);

    let res = usersDataList
      .filter(item => item.email == email.toLowerCase())
      .map(({name, email, password, phone, gender}) => ({
        name,
        email,
        password,
        phone,
        gender,
      }));
    console.log(res);

    if (res.length == 0) {
      toastAlert('Fill Valid Details');
    } else {
      if (res[0].email == email.toLowerCase() && res[0].password == password) {
        let userData = JSON.stringify(res[0]);
        AsyncStorage.setItem('user_login', userData);
        AsyncStorage.setItem('status', 'true');

        props.navigation.navigate('Main');
      } else {
        Alert.alert('Invalid Credentails');
      }
    }
  };

  // usersDataList

  // No matter
  const signupPage11 = () => {
    props.navigation.navigate('SignupPage');
  };
  return (
    <SafeAreaView style={css.backgroundSplash1}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
          }}>
          <Text style={css.login_1_Text}>{I18n.t('welcome')}</Text>
          <Image
            style={css.helloEmoji}
            source={require('./../images/helloEmoji.png')}
          />
        </View>
        <View>
          <Text style={css.login_2_Text}>{I18n.t('log_in_your_account')}</Text>
        </View>
      </View>
      <View style={css.loginView}>
        <InputText
          title={I18n.t('email')}
          holder={I18n.t('your_email')}
          myData={val => setEmail(val)}
        />
        <InputText
          title={I18n.t('password')}
          holder={I18n.t('your_password')}
          myData={val => setPassword(val)}
        />
        <View
          style={{
            marginTop: 7,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('F_Password')}>
            <Text
              style={{
                alignSelf: 'flex-end',
                marginTop: 20,
                color: '#208C5A',
                fontSize: 14,
              }}>
              {I18n.t('forgot_password')}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => loginPage11()}>
          <ButtonComp title={I18n.t('login')} />
        </TouchableOpacity>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 15,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 14,
            }}>
            {I18n.t('do_not_have_an_account')}
          </Text>

          <TouchableOpacity onPress={() => signupPage11()}>
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: 14,
                marginLeft: 6,
                color: '#208C5A',
              }}>
              {I18n.t('sign_up')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          alignSelf: 'center',
          marginTop: 5,
          fontWeight: '500',
          color: 'black',
        }}>
        Or
      </Text>
      <View
        style={{
          marginTop: 5,
        }}>
        <ButtonGmailFacebook
          title={I18n.t('sing_in_with_google')}
          Image={require('../images/gmailIcon.png')}
        />

        <ButtonGmailFacebook
          title={I18n.t('sing_in_with_apple')}
          Image={require('../images/apple.png')}
        />
      </View>
    </SafeAreaView>
  );
}
