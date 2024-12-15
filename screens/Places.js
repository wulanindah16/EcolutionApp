import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Places = () => {
  const jsonUrl = 'https://script.google.com/macros/s/AKfycbyKY5rHRoj_nDfgi_IJSdjKjIZFtvmHrJpcvNDoca4hAYzH91bh2FxbH47P8gbeDwrD1A/exec?sheetName=Map';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        setDataUser(json.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data)
        setDataUser(json.data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/background1.jpeg')} style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Echo Shops</Text>
        </View>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <FlatList
            style={{ marginBottom: 0 }}
            data={dataUser}
            onRefresh={refreshPage}
            refreshing={false}
            keyExtractor={({ no }) => no.toString()}
            renderItem={({ item }) => (
              <Animatable.View animation="fadeInUp" duration={500}>
                <View style={styles.card}>
                  <Image style={styles.image} source={{ uri: item.gambar }} />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.nama}</Text>
                    <Text style={styles.cardText}>{item.deskripsi}</Text>
                    <Text style={styles.cardText}>{item.alamat}</Text>
                    <Text style={styles.cardText}>{item.jambuka}</Text>
                  </View>
                </View>
              </Animatable.View>
            )}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Places;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 7,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  cardText: {
    fontSize: 14,
    color: '#4C9B4C',
  },
  icon: {
    color: '#388E3C',
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#4B9E4A',
    borderRadius: 20,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});
