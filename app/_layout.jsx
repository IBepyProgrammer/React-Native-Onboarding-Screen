import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'



SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      });

    useEffect(() => {
        if(error) throw error;

        if(fontsLoaded) SplashScreen.hideAsync();

    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="log_in" options={{ presentation: 'modal' }} />
        <Stack.Screen name="sign_up" options={{ presentation: 'modal' }} />
    </Stack>
  )
}

export default RootLayout