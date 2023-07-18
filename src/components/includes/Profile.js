import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Arrow from "../../assets/icons/arrowsvg.svg"


import BackIcon from '../../assets/icons/Property 1=left b.svg';

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <BackIcon width={25} height={27} />
          </TouchableOpacity>
          <Text style={styles.title}>Account</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>A</Text>
        </View>
        <View>
          <Text style={styles.name}>Aysha</Text>
          <Text style={styles.email}>aysh@gmail.com</Text>
          <Text style={styles.number}>735645278</Text>
        </View>
      </View>

      <View >
        <TouchableOpacity  style={styles.cartSettings}>

        <View>
          <Text>Orders</Text>
        </View>
        <View>
          <Arrow/>
        </View>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity  style={styles.cartSettings}>

        <View>
          <Text>Customer Care</Text>
        </View>
        <View>
          <Arrow/>
        </View>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity  style={styles.cartSettings}>

        <View>
          <Text>Coupon Quest</Text>
        </View>
        <View>
          <Arrow/>
        </View>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity  style={styles.cartSettings}>

        <View>
          <Text>Saved Cards</Text>
        </View>
        <View>
          <Arrow/>
        </View>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity  style={styles.cartSettings}>

        <View>
          <Text>My Rewards</Text>
        </View>
        <View>
          <Arrow/>
        </View>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity  style={styles.cartSettings}>

        <View>
          <Text>Address</Text>
        </View>
        <View>
          <Arrow/>
        </View>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity  style={styles.cartSettings}>

        <View>
          <Text>Notification</Text>
        </View>
        <View>
          <Arrow/>
        </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 17,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    marginLeft: 20,
    fontSize: 22,
  },
  profileContainer: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    marginVertical: 20,
    borderBottomWidth: 1,
    backgroundColor:"#A6A6A6"
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'black',
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 60,
    color: 'white',
    fontWeight: '600',
  },
  name: {
    marginVertical: 5,
    color: 'black',
  },
  email: {
    marginBottom: 5,
    color: 'black',
  },
  number: {
    color: 'black',
  },
  cartSettings: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20,
    paddingBottom:20,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  Arrow:{
    width:100,
    height:100,
  }
});
