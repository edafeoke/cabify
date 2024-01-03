import React, { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import COLORS from '../constants/colors';
import VALUES from '../constants/values';
import { Link, useRouter } from 'expo-router';

interface SecondaryButtonProps extends PressableProps {
    title?: string;
    children?: ReactNode;
    onPress?: () => void;
}

function SecondaryButton({ title, onPress, children, }: SecondaryButtonProps) {
    const router = useRouter()

    return (
            <Pressable style={styles.container} onPress={onPress}>
                <Text style={styles.text}>
                    {title || children}
                </Text>
            </Pressable>
    )
}

export default SecondaryButton

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: VALUES.borderRadius,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.primaryDark,
        marginVertical: 5,
    },
    text: {
        color: COLORS.primaryDark,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    }
})