import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>home</Text>
      </View>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})