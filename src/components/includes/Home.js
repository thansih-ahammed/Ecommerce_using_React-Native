import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-navigation';

import BellIcon from '../../assets/icons/Property 1=message not g.svg';
import MessageIcon from '../../assets/icons/Property 1=bell b.svg';

export default function Home() {
  const renderImages = [
    { id: 1, title: 'Fashion', image: require('../../assets/images/Frame 3466079.jpg') },
    { id: 2, title: 'Electronics', image: require('../../assets/images/Frame 3466084.jpg') },
    { id: 3, title: 'Sports', image: require('../../assets/images/Frame 3466081.jpg') },
    { id: 4, title: 'Automobile', image: require('../../assets/images/Frame 3466082.jpg') },
  ];

  return (
    <SafeAreaView style={{ padding: 10, paddingVertical: 30, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: '#000' }}>Shopline</Text>

        <View style={{ flexDirection: 'row' }}>
          <BellIcon style={{ marginRight: 10 }} width={30} height={30} />
          <MessageIcon width={30} height={30} />
        </View>
      </View>
      <ScrollView horizontal={true}>
        {renderImages.map((item) => (
          <TouchableOpacity key={item.id}>
            <View style={{ marginBottom: 10 }}>
              <Image source={item.image} style={{ width:100, height:100 }} />
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
