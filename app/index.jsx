import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";
import Colors from '@/constants/Colors'


import Animated, { FadeInRight } from 'react-native-reanimated'

import SocialLoginButtons from "../components/SocialLoginButtons";


const WelcomeScreen = () => {
  return (
    <>
      <Stack.Screen options={{headerShown: false}}/>

      <ImageBackground source={require('@/assets/images/ecommerce-splash.jpg')} style={{ flex: 1 }} resizeMode="cover">

        <View style={styles.container}>

          <LinearGradient colors={["transparent", 'rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']} style={styles.background}>

            <View style={styles.wrapper}>
              <Animated.Text style={styles.title} entering={FadeInRight.delay(500).duration(300).springify()}>Custom Shop</Animated.Text>
              <Animated.Text style={styles.description} entering={FadeInRight.delay(700).duration(300).springify()}>Your All in one online shop</Animated.Text>

              <SocialLoginButtons />

              <Text style={styles.logInText}>Already have an account? {" "}
                <Link href={"/log_in"} asChild>
                  <TouchableOpacity>
                    <Text style={styles.logInTextSpan}>LogIn</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </View>

          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end'
  },
  wrapper: {
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: '700',
    letterSpacing: 2.4,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20
  },
  logInText: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24
  },
  logInTextSpan: {
    color: Colors.primary,
    fontWeight: '600'
  }
});