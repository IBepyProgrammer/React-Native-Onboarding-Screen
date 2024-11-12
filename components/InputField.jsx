import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

import Colors from '@/constants/Colors'

const InputField = ({ placeholder, placeholderTextColor, autoCapitalize, secureTextEntry, keyboardType,  ...props }) => {
  return (
    <TextInput
     placeholder={placeholder}
     placeholderTextColor={placeholderTextColor}
     autoCapitalize = {autoCapitalize}
     secureTextEntry={secureTextEntry}
     keyboardType={keyboardType}
     style={styles.inputField}
     />
  )
}

export default InputField

const styles = StyleSheet.create({
    inputField: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    borderRadius: 20,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20
  }
})