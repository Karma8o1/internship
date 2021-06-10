import { createDrawerNavigator } from '@react-navigation/drawer';
// import { StatusBar } from 'expo-status-bar';
import CustomSidebarMenu from './custome'
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Contacts from './contacts';
import Details from './details';
import add from './add';
import NEW from './new'
const Drawer = createDrawerNavigator();

export default function slider () {
      return (

            
            
            <Drawer.Navigator initialRouteName="Contact" drawerContentOptions={
                  {activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 10, borderRadius:10},
      }}
      drawerContent={(props)=> <CustomSidebarMenu {...props}/>}
      >
              <Drawer.Screen name="Contacts" component={Contacts} />
              <Drawer.Screen name="details" component={Details} />
              <Drawer.Screen name="Adding" component={add} />
              <Drawer.Screen name="NEW" component={NEW} />
              </Drawer.Navigator>
            
            
      )
}

const styles = StyleSheet.create({
      container:{

      },
      Drawer: {

      }
})