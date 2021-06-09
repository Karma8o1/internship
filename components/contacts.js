import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,View,Text,Image, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function contact () {
const [people,setPeople] = useState([
      {name:'Alpha', time:'10:36 am',img:'./google-symbol,png',key:1},
      {name:'Beta', time:'10:36 am',img:'./google-symbol,png',key:2},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:3},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:4},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:5},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:6},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:7},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:8},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:9},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:10},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:11},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:12},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:13},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:14},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:15},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:16},
      {name:'Gamma', time:'10:36 am',img:'./google-symbol,png',key:17},
      {name:'Delta', time:'10:36 am',img:'./google-symbol,png',key:18},
      
]);
const colorfunc = () => {
      var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      return ColorCode;
}
return (

<View style={styles.container}>
      <View style={styles.bg}>
            <View style={styles.header}>
                  <TouchableOpacity>
                  <View style={styles.btn}>
      <Image style={{width:25,height:25}} source={require('./key.png')}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.btn}>
     <Image style={{width:30,height:30}} source={require('./plus.png')}/>
     </View>
     </TouchableOpacity>
      </View>
      <View style={styles.people}>
      <FlatList
      keyExtractor={(item)=>item.key}
      data={people}
      renderItem={({item})=>(
      // Wrapper
      <>
      <View style={styles.flexs}>
      <TouchableOpacity>
      <View style = {styles.f}>
      <View style={{backgroundColor:colorfunc(),padding:10,borderRadius:30}}><Image source={require('./google-symbol.png')}/></View>
      {/* To show name from state */}
      <View style={styles.list}><Text style={styles.name}>
            {item.name}
      </Text>
      <Text style={styles.times}>{item.time}</Text>
      </View></View>
      <View></View>
      <Image style={{opacity:0.5,height:15,width:15,
            position:'absolute',right:10,top:30,
            justifyContent:'center',backgroundColor:'#ededed',borderRadius:50,padding:5}}source={require('./next.png')}/>
      </TouchableOpacity>
      </View>
      
      <View style={styles.details}></View>
      </>)}
      />
      </View>
      </View>
      <StatusBar style="auto"/>
</View>
)
}

const styles = StyleSheet.create({
container: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'monospace',
      height:'100%',
  },
bg: {
      flex:1,
      backgroundColor:'#4267B2',
},
header: {
      flex:1.5,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'stretch',
      alignSelf:'auto',
      top:50,
      marginHorizontal:30,
      
},
btn: {
      backgroundColor:'white',
      width:40,
      height:40,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      padding:20
},
people: {
      flex:9,
      flexDirection:'column',
      backgroundColor:'white',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:20
},
list:{
      flex:1,
      flexDirection:'column',
      paddingHorizontal:10,
      
      marginTop:-10
},
name: {
fontSize:30,
marginTop:0,
},
times: {
fontSize:10
},
f: {
      flex:1,
      flexDirection:'row',
      borderBottomColor:'#ededed',
      borderBottomWidth:2,
      paddingHorizontal:10,
      paddingVertical:15,
},
images: {
      padding:20,
      borderRadius:50
},
});