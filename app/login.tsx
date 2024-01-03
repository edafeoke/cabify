// LoginScreen.tsx

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { Link, router, Stack } from 'expo-router';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { ArrowLeft } from 'lucide-react-native'
import Header from '../components/Header';
import VALUES from '../constants/values';
import COLORS from '../constants/colors';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

function LoginScreen() {

    const handleSubmit = (values: typeof initialValues) => {
        // Handle form submission logic here
        console.log('Form submitted with values:', values);
        router.replace('')
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
        headerShown: true,
        header: () => (<Header parentRoute='/' />)
      }} />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(formikProps) => (
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>Sign In</Text>

                        {/* Username/Email Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="Username or Email"
                            onChangeText={formikProps.handleChange('username')}
                            onBlur={formikProps.handleBlur('username')}
                            value={formikProps.values.username}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.username}</Text>

                        {/* Password Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={formikProps.handleChange('password')}
                            onBlur={formikProps.handleBlur('password')}
                            value={formikProps.values.password}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.password}</Text>

                        {/* Submit Button */}
                        <Pressable onPress={() => formikProps.handleSubmit}>
                            <Text>Submit</Text>
                        </Pressable>

                        {/* Optional: Add a "Forgot Password?" link */}
                        <Pressable onPress={() => console.log('Forgot Password?')}>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        padding:VALUES.padding,
    },
    formContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: COLORS.gray,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 5,
    },
    forgotPassword: {
        marginTop: 10,
        textAlign: 'center',
        color: 'blue',
    },
});

export default LoginScreen;
