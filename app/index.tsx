import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import COLORS from '../constants/colors'
import { router } from 'expo-router'

function index() {
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Image style={styles.image} source={require('../assets/welcome.png')} />
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.paragraph}>Have a better sharing experience</Text>
            </View>
            <View style={styles.group}>
                <PrimaryButton href='/register'>Create an account</PrimaryButton>
                <SecondaryButton onPress={()=>{
                    console.log('login');
                    
                    router.replace('/login')
                    }}>Login</SecondaryButton>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
    },
    group: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '90%', aspectRatio: 1,
    },
    title:{
        fontSize:24,
        color: COLORS.black,
        marginVertical:5,
    },
    paragraph:{
        fontSize:16,
        color: COLORS.gray,
    }
})