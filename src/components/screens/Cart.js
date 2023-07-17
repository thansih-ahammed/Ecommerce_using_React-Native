import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BackIcon from '../../assets/icons/Property 1=left b.svg';
import MenuIcon from '../../assets/icons/Property 1=adjust g.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import ProductCard from '../includes/ProductCard';

export default function Cart({ navigation }) {
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

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'HoMen Regular Shirt',
      featured_image: require('../../assets/images/Frame 3466083.jpg'),
      total_stock: 0,
      sold_count: 0,
      real_price: 100,
      offer_price: 50,
    },
    {
      id: 2,
      name: 'HoMen Regular Shirt',
      featured_image: require('../../assets/images/Frame 3466077.jpg'),
      total_stock: 0,
      sold_count: 0,
      real_price: 100,
      offer_price: 50,
    },
    {
      id: 3,
      name: 'HoMen Casual Shirt',
      featured_image: require('../../assets/images/Frame 3466078.jpg'),
      total_stock: 0,
      sold_count: 0,
      real_price: 100,
      offer_price: 50,
    },
    {
      id: 4,
      name: 'Nike Shoe',
      featured_image: require('../../assets/images/Frame 3466077.jpg'),
      total_stock: 0,
      sold_count: 0,
      real_price: 100,
      offer_price: 50,
    },
  ]);

  const renderCategories = () => {
    return categories.map((category) => (
      <TouchableOpacity key={category.id} style={styles.categoryCard}>
        <Text style={styles.categoryText}>{category.name}</Text>
      </TouchableOpacity>
    ));
  };

  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={20} height={27} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Flash Sale</Text>
        <TouchableOpacity>
          <MenuIcon width={27} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.spotlight}>
        <Text style={styles.spotlightTitle}>New Arrivals</Text>
        <Text style={styles.bottomText}>Sale up to 60% off</Text>
        <View style={styles.dateButton}>
          <CalendarIcon height={22} />
          <Text style={styles.dateText}>25-30 June</Text>
        </View>
        <Image
          style={styles.spotlightImage}
          source={require('../../assets/images/Frame 3466075.jpg')}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {renderCategories()}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.productList}>
        {renderProducts()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 17,
  },
  headertext: {
    fontWeight: '600',
    fontSize: 20,
  },
  spotlight: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FBE8E7',
    paddingVertical: 21,
    borderRadius: 10,
    alignSelf: 'center',
  },
  spotlightTitle: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 7,
  },
  bottomText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EBA352',
  },
  dateButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 18,
    alignSelf: 'flex-start',
    marginTop: 13,
  },
  dateText: {},
  spotlightImage: {
    width: '54%',
    aspectRatio: 570 / 508,
    position: 'absolute',
    right: 15,
    top: 10,
  },
  categories: {
    paddingLeft: 24,
    marginTop: 40,
    paddingBottom: 25,
  },
  categoryCard: {
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 22,
    marginRight: 11,
  },
  productList: {
    paddingHorizontal: 24,
    paddingBottom: 300,
  },
});
