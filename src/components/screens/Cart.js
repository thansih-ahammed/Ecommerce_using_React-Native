import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackIcon from "../../assets/icons/Property 1=left b.svg";
import MenuIcon from '../../assets/icons/Property 1=adjust g.svg';

export default function Cart({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={20} height={27} />
      </TouchableOpacity>
      <Text style={styles.headertext}>Flash Sale</Text>
      <TouchableOpacity>
        <MenuIcon width={27} height={20} />
      </TouchableOpacity>
    </View>
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
});
