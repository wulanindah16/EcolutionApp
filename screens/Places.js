import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStore, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable'; // Untuk animasi

const Places = () => {
    const jsonUrl = 'http://10.0.2.2:3000/places'; // URL endpoint data tempat
    const [isLoading, setLoading] = useState(true);
    const [dataPlaces, setDataPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [openingHours, setOpeningHours] = useState('');

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                setDataPlaces(json); // Menyimpan data tempat
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                setDataPlaces(json); // Update data tempat
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    const selectItem = (item) => {
        setSelectedPlace(item);
        setFirstName(item.nama);
        setLastName(item.alamat);
        setAddress(item.alamat);
        setDescription(item.deskripsi);
        setOpeningHours(item.jambuka);
    };

    const submit = () => {
        const data = {
            nama: firstName,
            alamat: lastName,
            deskripsi: description,
            jambuka: openingHours,
        };

        fetch(`http://10.0.2.2:3000/places/${selectedPlace.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((json) => {
                alert('Data tersimpan');
                refreshPage();
                setFirstName('');
                setLastName('');
                setAddress('');
                setDescription('');
                setOpeningHours('');
            })
            .catch((error) => console.error(error));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/background1.jpeg')} style={styles.background}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Sustainable Directory</Text>
                    </View>

                    {/* Form Input Fixed */}
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nama Tempat"
                            value={firstName}
                            onChangeText={(value) => setFirstName(value)}
                            placeholderTextColor="#fff"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Alamat"
                            value={lastName}
                            onChangeText={(value) => setLastName(value)}
                            placeholderTextColor="#fff"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Deskripsi"
                            value={description}
                            onChangeText={(value) => setDescription(value)}
                            placeholderTextColor="#fff"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Jam Buka"
                            value={openingHours}
                            onChangeText={(value) => setOpeningHours(value)}
                            placeholderTextColor="#fff"
                        />
                        <Button title="EDIT" onPress={submit} color="#4CAF50" />
                    </View>

                    {/* List Data with Scroll */}
                    <ScrollView style={styles.listContainer}>
                        <FlatList
                            data={dataPlaces}
                            onRefresh={refreshPage}
                            refreshing={isLoading}
                            keyExtractor={({ id }) => id.toString()}
                            renderItem={({ item }) => (
                                <Animatable.View animation="fadeInUp" duration={500}>
                                    <TouchableOpacity onPress={() => selectItem(item)}>
                                        <View style={styles.card}>
                                            <View style={styles.avatar}>
                                                <FontAwesomeIcon icon={faStore} size={50} color="#4CAF50" />
                                            </View>
                                            <View style={styles.cardDetails}>
                                                <Text style={styles.cardtitle}>{item.nama}</Text>
                                                <Text style={styles.cardText}>{item.alamat}</Text>
                                            </View>
                                            <View style={styles.editIcon}>
                                                <FontAwesomeIcon icon={faPenToSquare} size={20} color="#4CAF50" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )}
                        />
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 10,
    },
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 10, // Reduced vertical padding for smaller height
        paddingHorizontal: 20, // Horizontal padding for better spacing
        backgroundColor: '#388E3C', // Softer green for header
        borderRadius: 20, // Rounded corners
        borderBottomWidth: 0,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', // Center the text
        marginHorizontal: 20, // Optional: Adds some margin for better appearance
    },
    headerText: {
        fontSize: 20, // Reduced font size for the title
        fontWeight: 'bold',
        color: '#fff', // Text color to make it stand out
    },
    form: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Mengurangi latar belakang form agar tidak menutupi gambar
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20,
        position: 'absolute',
        top: 60,  // Adjusted to move the form higher
        left: 0,
        right: 0,
        zIndex: 1, // Ensures form is on top of the list
        height: 'auto', // Adjust this if you want to control the height of the form
    },
    listContainer: {
        marginTop: 330, // Adjust this value to ensure the list starts below the form
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#388E3C', // Softer green for input borders
        borderRadius: 8,
        padding: 8,  // Reduced padding
        marginVertical: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#388E3C', // Ensuring input text is white
        fontSize: 14,  // Reduced font size
    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Mengurangi opasitas agar gambar latar belakang terlihat
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDetails: {
        marginLeft: 10,
        flex: 1,
    },
    cardtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardText: {
        color: '#fff',
    },
    editIcon: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});

export default Places;
