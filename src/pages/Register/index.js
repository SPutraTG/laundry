import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Register = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text1}>Hello !</Text>
            <Text style={styles.text2}>Sign up</Text>
            <Text style={styles.text3}>get started</Text>

            <View style={styles.input}>
                <TextInput
                    style={{ paddingHorizontal: 10 }} placeholder="Email"
                />
            </View>
            <View style={styles.input2}>
                <TextInput
                    style={{ paddingHorizontal: 10 }} placeholder="Password"
                />
            </View>
            <View style={styles.input2}>
                <TextInput
                    style={{ paddingHorizontal: 10 }} placeholder="Confirm Password"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
                <View style={styles.input3} >
                    <Text style={styles.signin} >
                        Sign Up
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signup}>
                    Sign In
            </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    text1: {
        fontSize: 30,
        margin: 90,
        marginTop: 100
    },
    text2: {
        fontSize: 30,
        margin: 90,
        marginBottom: 10,
        marginVertical: -80
    },
    text3: {
        fontSize: 30,
        margin: 90,
        marginBottom: 10,
        marginVertical: -5
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 15,
        paddingHorizontal: 10,
        borderColor: "#00716F",
        borderRadius: 23,
        paddingVertical: 2
    },
    input2: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 15,
        paddingHorizontal: 10,
        borderColor: "#00716F",
        borderRadius: 23,
        paddingVertical: 2
    },
    input3: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#00716F",
        paddingVertical: 10,
        borderRadius: 23
    },
    signin: {
        color: "white",
    },
    signup: {
        alignSelf: "center",
        color: "#00716F",
        paddingVertical: 30
    }
})
