import { View, Text ,StyleSheet,TouchableOpacity, TextInput, ScrollView,SafeAreaView,Image} from 'react-native'

import React, {useEffect, useState} from 'react';
import BackIcon from "../../assets/icons/Property 1=left b.svg"
import Profile from '../../assets/icons/Property 1=profile g.svg'
import SearchIcon from '../../assets/icons/Property 1=search y.svg'

export default function Search({navigation}) {

    // const renderImage= [
    //   {
    //     id:1,
    //     iamge:require('../../assets/images/Rectangle 20479.png'),
    //     title:'men"s blasers '
    //   },
    //   {
    //     id:2,
    //     iamge:require('../../assets/images/pexels-liza-summer-6347546 7.png'),
    //     title:'woman"s sweatpants'
    //   },
    //   {id:3,
    //     iamge:require('../../assets/images/Rectangle 20707.png'),
    //     title:'kid"s hat'
    //   },
    //   {id:4,
    //     iamge:require('../../assets/images/Rectangle 20714.png'),
    //     title:'heels '
    //   },
    // ]
    const [categories, setCategories] = useState([
      {
        id: 1,
        name: 'electronics',
      },
      {
        id: 2,
        name: 'sports',
      },
      {
        id: 3,
        name: 'fashion',
      },
      {
        id: 4,
        name: 'beuty',
      },
      {
        id: 5,
        name: 'electronics',
      },
    ]);

    const renderCategories = () => {
      return categories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.categoryCard}>
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ));
    };

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
  <View>
    <Text style={styles.SearchText}>Recent Searches</Text>
    
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {renderCategories()}
      </ScrollView>
     

    
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
  categories: {
    paddingLeft: 24,
    marginTop: 40,
    paddingBottom: 25,
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
    paddingHorizontal:20,
    marginBottom:10,
  },
  imageContainer:{
    width:"50%",
    
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: '15%',
    marginBottom:10,

  },
  image:{



  },
  SearchText:{
  

  }
  ,
  title:{
    marginRight:20,
    marginVertical:20
  }

})