import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
    onSkip = {() => navigation.navigate("Login")}
    onDone = {() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: 'grey',
          image: <Image source={require('../assets/images/productivity.png')}/>,
          title: 'Welcome...',
          subtitle: 'Organize your time better and stay productive',
        },
        {
          backgroundColor: 'pink',
          image: <Image source={require('../assets/images/pomodoro.jpg')}/>,
          title: 'The pomodoro technique',
          subtitle: 'Be in control',
        },
        {
          backgroundColor: 'skyblue',
          image: <Image source={require('../assets/images/skill.jpg')}/>,
          title: 'Hustle Hard',
          subtitle: 'And be the best version of yourself',
        },
      ]}
    />
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
