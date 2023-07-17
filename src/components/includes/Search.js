import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import BackIcon from "../../assets/icons/Property 1=like b.svg"
import MenuIcon from '../../assets/icons/Property 1=adjust g.svg'

export default function Search() {
  return (
    <View style={styles.header}>
    <TouchableOpacity>
       <BackIcon width="20px" height="27px"/>
    </TouchableOpacity>
    <Text style={styles.headertext}>Flash Sale</Text>
    <TouchableOpacity>
       <MenuIcon width="27px" height="20"/>
    </TouchableOpacity>
   </View>
  )
}


const styles=StyleSheet.create({
  header:{
      flexDirection:"row",
      justifyContent: 'space-between',
      paddingHorizontal:24,
      paddingTop:17,

  },
  headertext:{
      fontWeight:'600',
      fontSize:20,


  }
})