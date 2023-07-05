
import React,{useState,useEffect} from 'react';
import {SafeAreaView,View,Text,Image,TouchableHighlight,StyleSheet,ScrollView,Button} from 'react-native';

const url = 'https://course-api.com/react-tours-project';


const App=()=>{
  const [tour,setTour]=useState([]);
  const [loading,setLoading]=useState(true);
  const [readmore,setReadMore]=useState(false);
const removeTour=(id)=>{
    setTour((tours)=>{
return tours.filter(tour => tour.id !== id)})
}
const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTour(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const handlePress=()=>{
    setReadMore(!readmore)
  }
  useEffect(() => {
    fetchTours()
  }, []);
  if(tour.length===0){
    return(
<View>
  <Button title='refresh' style={{widht:'50%',}} onPress={()=>fetchTours()}>can not fetch tour</Button>
  </View>
    )
  }
return(
  <SafeAreaView>
  <ScrollView style={styles.view}>
  <Text style={styles.title}>Our Tours</Text>
  {tour.map((tour)=>{
    const {id,image,name,info,price}=tour;
    return(
      <View key={tour.id}>
{tour.image ? <Image source={{uri: tour.image}} style={styles.photo} resizeMode='center' /> : null}
      <Text style={styles.text}>{tour.name}</Text>
    <Text style={styles.text}>{tour.price}</Text>

     {readmore?tour.info:`${info.substring(0, 100)}...`}
    <TouchableHighlight onPress={handlePress} style={styles.button}>
          <Text style={styles.text}>  {readmore ? 'show less' : '  read more'}</Text>
          </TouchableHighlight>
    </View>
    )
  })}
  <TouchableHighlight  onPress={removeTour} style={styles.button}>
         <Text style={styles.text}> not interested</Text>
        </TouchableHighlight>
</ScrollView>

  </SafeAreaView>
)
}
const styles=StyleSheet.create({
  view:{
    flex:1,
    justifyContent:'center'
  },
title:{
textAlign:'center',
fontSize:24,
fontWeight:'bold'
},
photo:{
  height:100,
  marginBottom:10,
  marginTop:10,
  borderBottomColor:'black'
},
button:{
widht:100,
height:50,
borderColor:'black',
borderWidth:1,
marginTop:10,
marginBottom:10,
paddingBottom:20,
padding:10
},
text:{
    textAlign:'center'

}
})
export default App;