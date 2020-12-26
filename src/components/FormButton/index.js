import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },

    buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'ptsans-bold'
    }
})
