import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Stack, Link, router } from 'expo-router'

import InputField from '../components/InputField'
import SocialLoginButtons from '../components/SocialLoginButtons'


const SignUp = () => {
  return (
    <>
      <Stack.Screen options={{headerTitle: 'Sign Up', headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color={Colors.black}/>
        </TouchableOpacity>
      )}}/>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
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
        <InputField
          placeholder="Confirm Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>

        <Text style={styles.logInText}>Already have an account? {" "}
          <Link href={"/log_in"} asChild>
            <TouchableOpacity>
              <Text style={styles.logInTextSpan}>LogIn</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider}/>

        <SocialLoginButtons />

      </View>
    </>
  )
}

export default SignUp

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