import { useEffect } from 'react';
import { Stack } from 'expo-router/stack';
import {
  SplashScreen,
} from 'expo-router';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import { ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Dark, Default } from '../themes';


export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};


function RootLayout() {
  const scheme = useColorScheme()
  const [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <ThemeProvider value={scheme === 'dark' ? Dark : Default}>
      <Stack screenOptions={{
        headerShown: false,
      }} />
    </ThemeProvider>
  )
}


export default RootLayout