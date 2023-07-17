import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
// import Electronics from "../../assets/images/Frame 3466084.svg"
import Hoodi from '../../assets/images/Frame 3466077.svg';
import BellIcon from '../../assets/icons/Property 1=message not g.svg';
import MessageIcon from '../../assets/icons/Property 1=bell b.svg';
import Like from '../../assets/icons/Property 1=like b.svg';
import Fasion from "../../assets/images/Frame 3466079.svg"
import Electronics from "../../assets/images/Frame 3466084.jpg"
import Sports from "../../assets/images/Frame 3466081.svg"
import Man from "../../assets/images/Frame 3466085.svg"

export default function Home({navigation}) {
  const renderImages = [
    {
      id: 1,
      title: 'Fashion',
      image: require('../../assets/images/Frame 3466079.jpg'),
    },
    {
      id: 2,
      title: 'Electronics',
      // image: require('../../assets/images/Frame 3466084.jpg'),
    },
    {
      id: 3,
      title: 'Sports',
      // image: require('../../assets/images/Frame 3466081.jpg'),
    },
    {
      id: 4,
      title: 'Automobile',
      // image: require('../../assets/images/Frame 3466082.jpg'),
    },
  ];




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopline</Text>

        <View style={styles.headerIcons}>
          <BellIcon style={styles.icon} width={30} height={30} />
          <MessageIcon style={styles.icon} width={30} height={30} />
        </View>
      </View>
      <ScrollView horizontal={true}>
        {renderImages.map(item => (
          <TouchableOpacity
          
          key={item.id}
          >
          
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
     
         

      </ScrollView>
      <View style={styles.flashSaleContainer}>
        <TouchableOpacity style={styles.flashSaleHeader}>
          <Text style={styles.flashSaleHeaderText}>Flash Sale</Text>
          <Text style={styles.flashSaleTimer}>02:04:56</Text>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
  
      <ScrollView>
    
        <ScrollView

          horizontal={true}
        >

          <View style={styles.itemContainer}>
            <TouchableOpacity
                 onPress={() => navigation.navigate('cart')}
            >
            <View style={styles.saleContainer}>
              <Text style={styles.saleText}>20% off</Text>
              <Like style={styles.likeIcon} width={30} height={30} />
            </View>
            <Fasion style={styles.hoodiImage} />
            <Text style={styles.itemText}>Hoodie Vert Rose</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>$59.00</Text>
                <Text style={styles.originalPriceText}>$100.00</Text>
              </View>
              <Text style={styles.soldText}>253 sold</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('cart')}>
            <View style={styles.saleContainer}>
              <Text style={styles.saleText}>20% off</Text>
              <Like style={styles.likeIcon} width={30} height={30} />
            </View>
            <Sports  style={styles.hoodiImage} />
            <Text style={styles.itemText}>Hoodie Vert Rose</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>$59.00</Text>
                <Text style={styles.originalPriceText}>$100.00</Text>
              </View>
              <Text style={styles.soldText}>253 sold</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('cart')} >
            <View style={styles.saleContainer}>
              <Text style={styles.saleText}>20% off</Text>
              <Like style={styles.likeIcon} width={20} height={20} />
            </View>
            <Hoodi style={styles.hoodiImage} />
            <Text style={styles.itemText}>Hoodie Vert Rose</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>$59.00</Text>
                <Text style={styles.originalPriceText}>$100.00</Text>
              </View>
              <Text style={styles.soldText}>253 sold</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('cart')}>
            <View style={styles.saleContainer}>
              <Text style={styles.saleText}>20% off</Text>
              <Like style={styles.likeIcon} width={30} height={30} />
            </View>
            <Hoodi style={styles.hoodiImage} />
            <Text style={styles.itemText}>Hoodie Vert Rose</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>$59.00</Text>
                <Text style={styles.originalPriceText}>$100.00</Text>
              </View>
              <Text style={styles.soldText}>253 sold</Text>
            </View>
            </TouchableOpacity>
          </View>
   
          {/* Add more items as needed */}
       
        </ScrollView>
        <View style={styles.BottomSection}>
        <View >
          <Text style={{color:'black',marginBottom:10}}>Full Color Hoodie</Text>
          <Text>Sales up to 40% off</Text>
          
        </View>
        <Man width={100} height={200}/>
        
      </View>
  
      </ScrollView>
 
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingBottom:50
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  imageContainer: {
    marginBottom: 10,
    marginRight:30,
    borderRadius:20

  },
  itemContainer:{
    marginBottom: 10,
    marginRight:30,
    borderRadius:20


  },
  image: {
    width: 100,
    height: 100,
    marginRight:20
   
  },
  flashSaleContainer: {
    marginTop: 30,
    marginBottom:20
  },
  flashSaleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flashSaleHeaderText: {
    fontSize: 20,
    color: '#000',
  },
  flashSaleTimer: {
    backgroundColor: 'black',
    color: 'gold',
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  // scrollView: {
  //   paddingVertical: 20,
  //   paddingHorizontal: 10,
  //   marginTop: 30,
  //   marginBottom: 30,
  // },
  itemContainer: {
    width: '20%',
    marginBottom: 10,
    marginRight: 20,
    paddingHorizontal:20,
    
    
    paddingVertical: 20,
    backgroundColor: 'pink',
    // alignItems:'center',
    // justifyContent:'center'
  },
  saleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  saleText: {
    fontSize: 14,
   
  },
  likeIcon: {
    width: 30,
    height: 20,
  },
  hoodiImage: {
    width: '20px',
    height:'20'
  },
  itemText: {
    fontSize: 16,
    textAlign:'center',
    marginBottom:30,
    marginTop:20
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  priceTextContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'

  },
  priceText: {
    fontSize: 18,
  },
  originalPriceText: {
    fontSize: 14,
  },
  soldText: {
    fontSize: 12,
  },
  BottomSection:{
    width: '100%',
    marginBottom: 10,
    marginRight: 20,
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical: 20,
    backgroundColor: 'pink',

  }
});
