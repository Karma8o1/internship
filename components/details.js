import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, ScrollView } from 'react-native';

export default function details () {
      return(
            <View style={styles.container}>
                  
                  
                  <View style={styles.image}>
                        <Image style={{height:150,width:150, backgroundColor:'#999',
            borderRadius:300}} soruce={require('./facebook.png')} />
                  </View>
                  <View style={styles.details}>
                  <Text style={{fontSize:24,
            fontWeight:'bold',}}value='name'>Name</Text>
                  <Text >change</Text>
                  </View>
                                    
            </View>
      )
      

}

const styles = StyleSheet.create({
      container: {
            flex:1,
            alignItems:'center',
      },
      image: {
            flex:1,
            position: 'absolute',
            top:100
      },
      details: {
            flex:4,
            position: 'absolute',
            position: 'absolute',
            top:300,
            
      }
      })
      