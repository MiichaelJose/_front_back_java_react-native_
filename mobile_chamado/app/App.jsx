import React, { useCallback, useEffect, Fragment } from 'react';
import { View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {  
  Roboto_400Regular, 
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from '@expo-google-fonts/roboto';
import { 
  Arvo_400Regular 
} from '@expo-google-fonts/arvo';

import Router from './src/routes/router';


export default function App() {
  const [fontLoaded] = useFonts({
    Arvo_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_700Bold_Italic
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if(fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]) // quando for null

  if(!fontLoaded) return null;
  
  return (
    <Fragment>
      <View onLayout={onLayout}></View>
      <Router />
    </Fragment>
  );
}