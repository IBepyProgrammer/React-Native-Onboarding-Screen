import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Stack, Link, router } from 'expo-router'

import InputField from '../components/InputField'
import SocialLoginButtons from '../components/SocialLoginButtons'


const LogIn = () => {
  return (
    <>
      <Stack.Screen options={{headerTitle: 'Log In', headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color={Colors.black}/>
        </TouchableOpacity>
      )}}/>
      <View style={styles.container}>
        <Text style={styles.title}>Login to Your Account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={() => {
          // The code below dismisses the "modal-window" first then pushes the HomeScreen.
          router.dismissAll();
          router.push('/home');
        }}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.logInText}>Don't have an account? {" "}
          <Link href={"/sign_up"} asChild>
            <TouchableOpacity>
              <Text style={styles.logInTextSpan}>SignUp</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider}/>

        <SocialLoginButtons />

      </View>
    </>
  )
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  logInText: {
    marginBottom: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24
  },
  logInTextSpan: {
    color: Colors.primary,
    fontWeight: '600'
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom: 30
  }
})