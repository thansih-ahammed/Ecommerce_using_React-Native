// import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
// import React from 'react'
// import BackIcon from "../../assets/icons/Property 1=left b.svg"
// import { SafeAreaView } from 'react-native-safe-area-context'

// export default function Profile() {
//   return (
//     <SafeAreaView>
//     <View style={styles.Container}>
//       <View style={styles.header}>
//     <TouchableOpacity >
//        <BackIcon width="25px" height="27px"/>
//     </TouchableOpacity>
//     <Text>
//       Account
//     </Text>
//     </View>
//     </View>
//     </SafeAreaView>
//   )
// }

// const styles=StyleSheet.create({
//   Container:{
//     paddingHorizontal:24,
//     paddingTop:17,

//   },
//   header:{
//       flexDirection:"row",
//       justifyContent: 'space-between',
//     paddingTop:20,
//       alignContent:'center',
//       alignItems:'center'
//   },
// })
import { View, Text } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}