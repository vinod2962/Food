import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
} from 'react-native';
import css from '../stylesheets/css';
import InputText from '../components/InputText';
import ButtonComp from '../components/ButtonComp';
import ButtonGmailFacebook from '../components/ButtonGmailFacebook';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import Snackbar from 'react-native-snackbar';
// import PhoneInput from 'react-native-phone-number-input';
import PhoneInput from 'react-native-phone-number-input';

var usersDataList = [];

export default function SignupPage(props) {
  useEffect(() => {
    getData();
  }, []);

  //   console.log(getData())

  const emailcom = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const passwordcom =
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      password,
    );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  // const [nameError, setNameError] = useState(false)
  // const [emailError, setEmailError] = useState(false)
  // const [passwordError, setPasswordError] = useState(false)
  // const [confirmError, setConfirmError] = useState(false)
  // const [phoneError, setPhoneError] = useState(false)

  const toastAlert = val => {
    Toast.show(val, Toast.LONG, {
      backgroundColor: '#208C5A',
    });
  };

  const Validation = async () => {
    if (name.length <= 1) {
      name === ''
        ? toastAlert('Please enter your name')
        : toastAlert('Please enter valid name');
    } else if (gender === '') {
      toastAlert('Please enter your gender');
    } else if (email === '') {
      toastAlert('Please enter your email');
    } else if (emailcom) {
      toastAlert('please fill the valid email');
    } else if (
      usersDataList.some(el => el.email === email.toLowerCase()) === true
    ) {
      toastAlert('This email are used by another user');

      //   Snackbar.show({

      //     text: 'This email are used by another user',
      //     duration: Snackbar.LENGTH_SHORT,
      //   });

      // Snackbar.show({
      //   text: 'Hello world',
      //   color: 'white',
      //   duration: Snackbar.LENGTH_INDEFINITE,
      //   marginBottom: 5,
      //   backgroundColor: '#208C5A',
      //   // action: {
      //   //   // text: 'UNDO',
      //   //   text: 'Cancel',
      //   //   textColor: 'black',

      //   //   onPress: () => {
      //   //     /* Do something. */
      //   //   },

      //   // },
      // });
    } else if (password === '') {
      toastAlert('Please enter your password');
    } else if (passwordcom) {
      toastAlert(
        'Strong Password:-  1 uppercase. 1 lowercase ,1 special character,1 number,Min 8 characters, Max 30 characters.',
      );
    } else if (confirm === '') {
      toastAlert('Please enter your confirm password');
    } else if (password != confirm) {
      toastAlert('your password and confirm password not same');
    } else if (phone === '') {
      toastAlert('Please enter your Phone number');
    } else {
      let userData = {
        name: name,
        gender: gender,
        email: email.toLowerCase(),
        password: password,
        confirm: confirm,
        phone: phone,
      };

      usersDataList.push(userData);
      let userStr = JSON.stringify(usersDataList);
      AsyncStorage.setItem('users', userStr);

      toastAlert('Please enter your Phone number');
      props.navigation.navigate('LoginPage');

      setName('');
      setGender('');
      setEmail('');
      setPassword('');
      setConfirm('');
      setPhone('');

      // console.log(usersDataList);
    }
  };
  const getData = async () => {
    let users = await AsyncStorage.getItem('users');
    let parsedata = JSON.parse(users);
    usersDataList = [...parsedata];
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={css.topAreaView}>
        <Text style={css.signUp_1_Text}>Sign Up</Text>
        <Text style={css.signUp_2_Text}>
          Create account and choose your favorite menu
        </Text>
      </View>

      <View style={css.SignupView}>
        <InputText
          title="Name"
          holder="Your Name"
          myData={val => setName(val)}
          value={name}
        />

        <InputText
          title="Gender"
          holder="Your Gender"
          myData={val => setGender(val)}
          value={gender}
        />

        <InputText
          title="Email"
          holder="Your Email"
          myData={val => setEmail(val)}
          value={email}
        />

        <InputText
          title="Password"
          holder="Password"
          myData={val => setPassword(val)}
          value={password}
        />

        <InputText
          title="Confirm Password"
          holder="Confirm Password"
          myData={val => setConfirm(val)}
          value={confirm}
        />

        <Text
          style={{
            marginTop: 14,
            fontSize: 16,
          }}>
          Phone Number
        </Text>
        <PhoneInput
          containerStyle={{
            paddingVertical: 0,
            width: 280,
            borderBottomColor: '#208C5A',
            borderBottomWidth: 1,
            alignSelf: 'center',
            marginTop: 3,
            backgroundColor: 'white',
            height: 35,
          }}
          textContainerStyle={{
            backgroundColor: 'white',
            paddingLeft: 10,
            // backgroundColor: 'red',
          }}
          layout="second"
          textInputStyle={{height: 20}}
          countryPickerButtonStyle={{
            width: 70,
            paddingLeft: 1,
            // fontSize: 10,
          }}
          onChangeText={val => setPhone(val)}
          value={phone}
        />
        {/* <InputText
          title="Phone Number"
          holder="Your Phone Number"
          myData={val => setPhone(val)}
          value={phone}
        /> */}

        <TouchableOpacity onPress={val => Validation(val)}>
          <ButtonComp title="Create account" />
        </TouchableOpacity>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginTop: 1,
              fontSize: 15,
            }}>
            Have an account?
          </Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('LoginPage')}>
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: 16,
                marginLeft: 5,
                color: '#208C5A',
              }}>
              Log inn
            </Text>
          </TouchableOpacity>

          {/* <Button
                    color={"#208C5A"}
                    title="Log in"
                    onPress={()=>props.navigation.navigate("LoginPage")}
                    /> */}
        </View>
      </View>

      <Text
        style={{
          fontSize: 15,
          alignSelf: 'center',
          marginTop: 10,
          fontWeight: '500',
          color: 'black',
          // overflow:'hidden'
        }}>
        ---------------------------Or---------------------------
      </Text>

      <View
        style={{
          marginTop: 10,
        }}>
        <ButtonGmailFacebook
          title="Sign in with Google"
          Image={require('../images/apple.png')}
        />

        <ButtonGmailFacebook
          title="Sign in with Google"
          Image={require('../images/gmailIcon.png')}
        />
      </View>
    </SafeAreaView>
  );
}
