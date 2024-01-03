import React, { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../constants/colors';
import VALUES from '../constants/values';
import { Link } from 'expo-router';
import { useTheme } from '@react-navigation/native';

interface PrimaryButtonProps extends PressableProps {
    title?: string;
    children?: ReactNode;
    onPress?: () => void;
    href: string,
}

function PrimaryButton({ title, onPress, children, href }: PrimaryButtonProps) {
    const {colors} = useTheme()
    return (
        <Link style={styles.container}  href={href} asChild>
            <Pressable>
                <Text style={styles.text}>
                    {title || children}
                </Text>
            </Pressable>
        </Link>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: COLORS.primary,
        borderRadius: VALUES.borderRadius,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        marginVertical: 5,

    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        width: 'auto',
    }
})