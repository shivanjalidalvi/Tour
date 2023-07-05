import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';
const url = 'https://course-api.com/react-tours-project'

const Tour =({id, img, info, name, price, removeTour})=>{
const [readme,setReadme]=useState(false);
return(
  <View style={styles.container} key={id}>
<Image source={url} style={styles.image}/>
<View>
  <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{price}</Text>
    <Text>{info}</Text>
</View>
<View>
<Button onPress={()=>setReadme(!readme)} title='show' style={styles.button}>
{readme?'show':'hide'}
</Button>
</View>
<Button onPress={()=>removeTour} title='remove' style={styles.button}/>
  </View>
)
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  button:{
    backgroundColor:'blue',
    color:'white'
  }
})
export default Tour;