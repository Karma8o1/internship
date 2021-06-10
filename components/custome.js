import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  
      return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#e8f4f8'}}>
          <View style={{backgroundColor:'#ededed'}}>
      <Image
        source={require('./logo.png') }
        style={{marginBottom:10}} 
        style={styles.sideMenuProfileIcon}
      />
      </View>
      <DrawerContentScrollView {...props} style={{borderTopWidth:3,borderColor:'#ededed'}}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
          
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
      borderRadius:50,
      marginTop:50,
      alignSelf:'center',
      marginHorizontal:20,
      height:100,
      width:100,
      marginBottom:30,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;