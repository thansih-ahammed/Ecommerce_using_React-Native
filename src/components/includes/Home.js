import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-navigation';

import BellIcon from '../../assets/icons/Property 1=message not g.svg';
import MessageIcon from '../../assets/icons/Property 1=bell b.svg';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{padding:10, paddingVertical:20, }} >
     <View style={{ flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
      <Text style={{fontSize:22}} >Shopline</Text>
        
        <View  style={{ flexDirection:'row' }}>
          
          <BellIcon style={{  marginRight: 10 }} width={30} height={30}/>
          <MessageIcon  width={30} height={30} />
        </View> 
  
        </View>
    </SafeAreaView>
  );
}
