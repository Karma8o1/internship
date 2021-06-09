import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View} from 'react-native';
import 'react-native-gesture-handler';
import Main from './components/main';
import Contacts from './components/contacts'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  
  return (
      
      <View style={styles.container}>
        {/* <Contacts/> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Signup" component={Main}/>
            <Stack.Screen options={{headerShown: false}} name="Contacts" component={Contacts}/>
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