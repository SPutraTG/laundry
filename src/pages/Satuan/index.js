import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, } from 'react-native'
import { InputData } from '../../components'


const Satuan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#D1EAE1"
                barStyle="light-content"
            />
            <Text style={styles.welcome}>Menu Satuan</Text>
            <Text style={styles.welcome2}>Harga laundry Satuan Rp. 1500</Text>
            <TextInput style={styles.input}
                placeholder="Nama"
                placeholderTextColor="#62AF93"
                autoCapitalize="none"
            />
            <TextInput style={styles.input}
                placeholder="Alamat"
                placeholderTextColor="#62AF93"
                autoCapitalize="none"
            />
            <TextInput style={styles.input}
                placeholder="Jumlah pakaian "
                placeholderTextColor="#62AF93"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.userBtn} onPress={() => navigation.navigate('MainApp')}>
                <Text style={styles.btnTxt}>Pesan</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Satuan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D1EAE1'
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10
    },
    welcome2: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 8,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 10,
        borderColor: '#62AF93'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    userBtn: {
        backgroundColor: '#62AF93',
        padding: 15,
        width: '30%',
        borderRadius: 10
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    }
})
