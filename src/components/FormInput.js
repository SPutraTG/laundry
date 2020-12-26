import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';


const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={labelValue} style={styles.input} numberOfLine={1}
                placeholder={placeholderText} placeholderTextColor="#666" {...rest} />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: 60,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
});