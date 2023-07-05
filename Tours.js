import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Tour from './Tour';
const Tours =({tours,removeTours})=>{
  return(
<View style={styles.container}>
<Text style={styles.heading}>Our Tour</Text>
{tours.map((tour)=>{
  const {tours,removeTours}=tour;
  <View key={tour.id}>
<Text>{tour}</Text>
<Text>{removeTours}</Text>
</View>
})}
</View>
  )
}
const styles=StyleSheet.create({
  container:{
    justifyContent:'center'
  },
  heading:{
    fontSize:24,
    fontFamily:'bold'
  }
})