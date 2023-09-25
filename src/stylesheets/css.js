import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundSplash: {
    backgroundColor: '#208C5A',
    flex: 1,
  },

  backgroundSplash1: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageLogo: {
    height: 140,
    width: 140,
    tintColor: 'white',
    alignSelf: 'center',
    marginTop: 240,
  },
  splashText: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },

  // Login page

  login_1_Text: {
    fontSize: 33,
    fontWeight: 'bold',
  },

  helloEmoji: {
    height: 25,
    width: 25,
    margin: 8,
  },
  login_2_Text: {
    fontSize: 15,
    marginLeft: 0,
    marginTop: 24,
    color: 'black',
    fontWeight: 'bold',
  },

  loginView: {
    marginTop: 5,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    alignSelf: 'center',
    paddingTop: 10,
  },

  //signup page css

  topAreaView: {
    alignSelf: 'center',
    marginTop: 20,
  },
  signUp_1_Text: {
    fontSize: 30,
  },
  signUp_2_Text: {
    marginTop: 4,
    color: 'black',
    fontWeight: '400',
  },
  SignupView: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'white',
  },

  // forgot screen

  fp_1_Text: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  fb_2_Text: {
    fontSize: 14,
    marginTop: 4,
    color: 'black',
    fontWeight: '400',
  },

  vc_1_Text: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  vc_2_Text: {
    fontSize: 14,
    marginTop: 4,
    color: 'black',
    fontWeight: '400',
  },

  otpCode: {
    borderWidth: 0.5,
    borderColor: '#208C5A',
    padding: 10,
    width: 40,
    margin: 10,
    fontSize: 18,
    alignSelf: 'center',
  },
});
