import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { ImageHeader, Logo } from '../../assets';
import { Saldo, PesananAktif } from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';
import { WARNA_ABU_ABU } from '../../utils/constant';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={ImageHeader} style={styles.header}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.hello}>
                        <Text style={styles.selamat}>Selamat Datang, </Text>
                        <Text style={styles.username}>Di Antar Laundry</Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <View style={styles.layanan}>
                    <Text style={styles.label}>Layanan Kami</Text>
                    <View style={styles.iconLayanan}>
                        <TouchableOpacity onPress={() => navigation.navigate('Kiloan')}>
                            <ButtonIcon title="Kiloan" type="layanan" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Satuan')}>
                            <ButtonIcon title="Satuan" type="layanan" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('VIP')}>
                            <ButtonIcon title="VIP" type="layanan" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Karpet')}>
                            <ButtonIcon title="Karpet" type="layanan" />
                        </TouchableOpacity>
                        <ButtonIcon title="Setrika Saja" type="layanan" />
                        <ButtonIcon title="Ekspress" type="layanan" />
                    </View>
                </View>
                <View style={styles.pesananAktif}>
                    <Text style={styles.label}>Pesanan Aktif</Text>
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
                    <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.3,
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    logo: {
        width: windowWidth * 0.25,
        height: windowHeight * 0.06,
    },
    hello: {
        marginTop: windowHeight * 0.03,
    },
    selamat: {
        fontSize: 24,
        fontFamily: 'ptsans-bold',
    },
    username: {
        fontSize: 22,
        fontFamily: 'ptsans-regular',
    },
    layanan: {
        paddingLeft: 30,
        paddingTop: 15,
    },
    label: {
        fontSize: 18,
        fontFamily: 'ptsans-bold',
    },
    iconLayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',
    },
    pesananAktif: {
        paddingTop: 10,
        paddingHorizontal: 30,
        backgroundColor: WARNA_ABU_ABU,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
});