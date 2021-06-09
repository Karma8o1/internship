import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import 'react-native-gesture-handler';
import {Formik} from 'formik'

export default function Main ({navigation}) {

return (
      <View style={styles.containers}>
      <View style={styles.backup}>
          <View style={styles.header}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.desc}>Create New Account</Text>
        </View>
        </View>
      <View style={styles.contain}>
            
            <View style={styles.inneritems}>
            <Formik
            initialValues={{
                  name:'',
                  email:'',
                  pass:'',
            }}
            onSubmit={(values)=>{
                  if(values.name === 'abc' && values.email == 'abc' && values.pass == 'abc')
                  {
                        navigation.navigate('Contacts');
                        console.log('worked')
                  }
                  else
                  {
                        console.log("didn't work");
                  }
            }}>

            {(props)=>(
                  <>
                  <View style={styles.inputs}>
                  <Text style={styles.titles}>
                  Fullname
                  </Text>
                  
                  <TextInput style={styles.input} placeholder={'Your Name'}
                  onChangeText={props.handleChange('name')}
                  onBlur={props.handleBlur('name')}
                  value={props.values.name}/>
                  <Text style={styles.titles}>
                  Email
                  </Text>
                  <TextInput style={styles.input} placeholder={'Your Email'}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}     />
                  <Text style={styles.titles}>Password</Text>
                  <TextInput secureEntry={true} style={styles.input} placeholder={'Your Password'}
                  onChangeText={props.handleChange('pass')}
                  onBlur={props.handleBlur('pass')}
                  value={props.values.pass}     />
                  </View>
            
                  
                  <TouchableOpacity onPress={props.handleSubmit}>
                  <View style={styles.register} >
                  <Text style={{fontWeight:'bold',color:'white'}}>REGISTER NOW</Text>
                  </View>
                  </TouchableOpacity>
           
             
            <View style={styles.forget}>
                  <TouchableOpacity onPress={()=>{console.log(1)}}>
                  <Text>Forget Password?</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.options}>
                 <Text style={styles.line}></Text>
                 <Text style={{fontWeight:'bold',color:'gray',marginHorizontal:5,marginTop:-10}}>OR</Text>
                 <Text style={styles.line}></Text> 
                 </View>
                 <View style={styles.otherlogin}>
                       <TouchableOpacity>
                       <View style={styles.google}>
                             <Image source={require('./google-symbol.png')} style={{marginEnd:10}}/>
                       <Text style={{fontSize:36,color:'white',marginBottom:10}}>|</Text>
                             <Text style={{color:'white',fontWeight:'bold',marginStart:5,fontSize:11}}>Login With Google</Text>
                             </View>
                             </TouchableOpacity>
                       <TouchableOpacity>
                       <View style={styles.facebook}>
                       <Image source={require('./facebook.png')} style={{marginEnd:10}}/>
                       <Text style={{fontSize:36,color:'white',marginBottom:10}}>|</Text>
                             <Text style={{color:'white',fontWeight:'bold',marginStart:5,fontSize:11}}>Login With Facebook</Text></View>
                             </TouchableOpacity>
                 </View>
                 </>
                 )}
               </Formik>
            </View>
            <View style={styles.bottom}>
                  <Text>Sign in with?</Text>
                  <TouchableOpacity>
                  <Text style={{color:'blue',fontWeight:'bold',marginStart:5}}>Phone Number</Text>
                  </TouchableOpacity>
            </View>
            
            </View>
      </View>
      );
}

const styles = StyleSheet.create ({
containers : {
      fontFamily: 'monospace',
      flex: 1,
      alignItems:'center',
      height:'100%',
      width:'100%'
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
      borderBottomRightRadius:250,
      borderBottomLeftRadius:0
    },
contain: {
      
      left:0,
      right:0,
      top:0,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
},

titles: {
margin: 5,
fontWeight: 'bold',
},

input: {
flex:3,
padding: 10,
borderWidth: 1,
borderRadius: 5,
borderColor: 'black',
backgroundColor: '#ddd',
zIndex:1,
},

inneritems: {
flex:1,
backgroundColor:'#ededed',
width:'95%',
paddingHorizontal:10,
paddingBottom:150,
borderWidth:1,
borderColor:'#ddd',
position: 'absolute',
borderRadius:12,
top: 220,
left:10,
},
forget: {
      flex:1,
      position:'absolute',
      right:10,
      top:250,
},
register: {
      flex:1,
      backgroundColor: '#4d94ff',
      marginTop:35,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
      height:45,
},
line: {
      height:3,
      backgroundColor:'#999',
      width:'45%',
},
options: {
      justifyContent:'center',
      alignItems:'stretch',
      flexDirection:'row',
      position:'absolute',
      top:'105%',
      left:20,
      right:0,
      margin:10,
      width:'90%'
},
otherlogin: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignSelf:'center',
      width:'100%',
      position:'absolute',
      top:'120%',
},
google:{
      flex:1,
      flexDirection:'row',
      height:40,
      backgroundColor:'#de5264',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
      marginEnd:0,
      alignSelf:'flex-start'
},
facebook: {
      flex:1,
      flexDirection:'row',
      height:40,
      backgroundColor:'#4267B2',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      marginStart:5,
},
bottom: {
flexDirection:'row',
position: 'absolute',
top:800
},

})