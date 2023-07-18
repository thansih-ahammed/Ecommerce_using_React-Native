import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {cloneElement} from 'react';
import BackIcon from '../../assets/icons/Property 1=left b.svg';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <BackIcon width="25px" height="27px" />
          </TouchableOpacity>
          <Text style={styles.Title}>Account</Text>
        </View>
      </View>
      <View style={styles.ProfileContainer}>
        <View style={styles.Profile}>
          <Text style={styles.ProfileText}>A</Text>
        </View>
        <View>
          <Text style={styles.Name}>Aysha</Text>
          <Text style={styles.Email}>aysh@gmail.com</Text>
          <Text style={styles.Number}>735645278</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 24,
    paddingTop: 17,
  },
  header: {
    flexDirection: 'row',

    paddingTop: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  Title: {
    marginLeft: 20,
    fontSize: 22,
  },
  ProfileContainer: {
    width: '100%',
    paddingVertical: 10,

    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  Profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'black',
    marginRight: 20,
    marginLeft: 20,
    // padding:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileText: {
    fontSize: 60,
    color: 'white',
    fontWeight: '600',
  },
  Name: {
    marginVertical: 5,
    color: 'A6A6A6',
  },
  Email: {
    marginBottom: 5,
    color: 'A6A6A6',
  },
  Number: {
    color: 'A6A6A6',
  },
});
