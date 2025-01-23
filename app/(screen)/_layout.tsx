
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 

  return (
   
      <Stack>
        {/* <Stack.Screen name="homescreen" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="profile" options={{ headerShown: false }} /> */}
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="edit" options={{ headerShown: false }} />
      </Stack>
      
   
  );
}
   