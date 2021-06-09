import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text} from 'react-native';
import Main from './components/main'
import Contacts from './components/contacts'
export default function App() {
  return (
      
      <View style={styles.container}>
        <Contacts/>
            {/* <Main/> */}
      <StatusBar style="none" />
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
  header: {
    fontWeight:'bold',
    fontSize:20,
    color:'white',
    position: 'absolute',
    top:100,
    left:100,
    justifyContent:'center',
    alignItems:'center',
},
title: {
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    alignSelf:'center',
    left:50,
    position: 'absolute',
},
desc: {
    color:'white',
    marginTop:5,
    position: 'absolute',
    top: 20,
    left:40
},
  backup: {
    position:'absolute',
    top:0,
    left:0,
    right:100,
    bottom:100,
    height:400,
    width:'100%',
    backgroundColor: 'lightcoral', 
  },
});