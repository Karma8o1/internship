import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View} from 'react-native';
import 'react-native-gesture-handler';
import Main from './components/main';
import NEW from './components/new';
import Slider from './components/slider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  
  return (
      
      <View style={styles.container}>
        {/* <Contacts/> */}
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Signup" component={Main}/>
            <Stack.Screen options={{headerShown: false}} name="Slider" component={Slider}/>
            <Stack.Screen options={{headerShown: false}} name="NEW" component={NEW}/>
          </Stack.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
      </View>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'monospace',
    height:'100%'
  },
});