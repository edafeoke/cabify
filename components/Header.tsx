import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

function Header({parentRoute}: {parentRoute?:string}) {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', paddingHorizontal: 15, flexDirection: 'row', height: 80 }}>
        {parentRoute && (
            <Pressable onPress={()=>router.replace(parentRoute)} style={{flexDirection:'row', alignItems:'center'}}>
            <ArrowLeft color='gray' size={24} style={{ marginRight: 10 }} />
            <Text>Back</Text>
          </Pressable> 
        )}
      </View>
    </SafeAreaView>
  )
}

export default Header