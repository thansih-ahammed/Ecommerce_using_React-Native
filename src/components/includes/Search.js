import { View, Text ,StyleSheet,TouchableOpacity, TextInput, SafeAreaView} from 'react-native'
import React from 'react'
import BackIcon from "../../assets/icons/Property 1=left b.svg"
import Profile from '../../assets/icons/Property 1=profile g.svg'
import SearchIcon from '../../assets/icons/Property 1=search y.svg'

export default function Search({navigation}) {
  return (
    <SafeAreaView style={styles.Container}>
    <View style={styles.header}>
    <TouchableOpacity   >
       <BackIcon width="25px" height="27px"/>
    </TouchableOpacity>
    <TextInput placeholder='Search for brands & products'/>
    <TouchableOpacity style={styles.RightContainer}>
    <SearchIcon  style={styles.icon} width="27px" height="20"/>
       <Profile width="27px" height="20"/>
    </TouchableOpacity>
   
   </View>
    <View style={styles.HeadingContainer}>
    <Text style={styles.Heading}>PHOTO SEARCH</Text>
  </View>
  <View style={styles.MiddleContainer} >
    <View style={styles.PhotoCotnainer}>
      <Profile/>
      <Text>Click a photo</Text>
    </View>
    <View style={styles.PhotoCotnainer}>
    <Profile />
      <Text>Select a photo</Text>
    </View>
  </View>
  </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  Container:{
    paddingHorizontal:24,
    paddingTop:17,

  },
  header:{
      flexDirection:"row",
      justifyContent: 'space-between',
    paddingTop:20,
      alignContent:'center',
      alignItems:'center'
  },
  headertext:{
      fontWeight:'600',
      fontSize:20,


  },
  RightContainer:{
    flexDirection:'row'

  },
  icon:{
   marginRight:10
  },
  HeadingContainer:{
   marginVertical:20

  },
  Heading:{
    fontSize:18
  },
  MiddleContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  PhotoCotnainer:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical:15,
    paddingHorizontal:20
  }

})