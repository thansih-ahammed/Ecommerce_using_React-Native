import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import BagIcon from '../../assets/icons/Property 1=bag y.svg';

export default function ProductCard({ product }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={product.featured_image} />
      <View style={styles.rightView}>
        <View style={styles.details}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.realPrice}>$100.00</Text>
          <Text style={styles.offerPrice}>$50.00</Text>
          <View style={styles.sellingRate}>
            <View style={styles.sellingLevel}></View>
            <Text style={styles.soldCount}>350 Sold</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <BagIcon width={20} height={20} />
          <Text style={styles.buyText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 26,
    height: undefined,
    aspectRatio: 624 / 832,
    borderRadius: 7,
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  details: {
    flex: 1,
  },
  productTitle: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 20,
    color: '#333333',
  },
  realPrice: {
    fontWeight: '600',
    fontSize: 13,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  offerPrice: {
    fontWeight: '600',
    fontSize: 19,
    color: '#EBA352',
  },
  sellingRate: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 3,
    alignItems: 'center',
    marginTop: 8,
    position: 'relative',
  },
  sellingLevel: {
    position: 'absolute',
    backgroundColor: '#2d2d2d',
    top: 0,
    left: 0,
    bottom: 0,
    width: '70%',
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyText: {
    marginLeft: 5,
    fontWeight: '600',
    fontSize: 15,
    color: '#EBA352',
  },
});
