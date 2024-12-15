import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Modal, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/background1.jpeg')}
      style={styles.imageBackground}
    >
      <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'flex-start' }}>
        <View style={styles.header}>
          <Text style={styles.title}>ECOLUTION</Text>
          <Text style={styles.subtitle}>Digital Solution to Save Our Planet</Text>
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>


        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>About</Text>
              <Text style={styles.modalText}>
                Ecolution adalah platform digital yang dirancang sebagai sarana edukasi dan penghubung antara konsumen dan penjual yang memiliki minat tinggi terhadap produk ramah lingkungan. Platform ini berfungsi sebagai media informasi dan pemasaran untuk produk-produk ramah lingkungan, yang bertujuan untuk meningkatkan ekonomi masyarakat serta mendukung pembangunan berkelanjutan sesuai dengan SDGs 12 (Konsumsi dan Produksi yang Bertanggung Jawab). Melalui Ecolution, konsumen dapat dengan mudah mengakses berbagai produk ramah lingkungan, sekaligus mendorong pertumbuhan ekonomi hijau dengan dukungan teknologi GIS dan berkontribusi dalam pengurangan sampah untuk mendukung keberlanjutan lingkungan.
              </Text>
              <Button title="Close" onPress={() => setModalVisible(false)} color="#dc3545" />
            </View>
          </View>
        </Modal>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the Fact</Text>
          <Text style={styles.sectionSubtitle}>Tahukah Kamu?</Text>
          <Text style={styles.sectionText}>
            Berdasarkan data dari Sistem Informasi Pengolahan Sampah Nasional (SIPSN) Kementerian Lingkungan Hidup dan Kehutanan (KLHK), Indonesia pada pertengahan tahun 2024 telah memproduksi sampah nasional sebanyak 31,9 juta ton. Sampah plastik yang sulit terurai mencakup lima persen atau 3,2 juta ton dari total sampah nasional yang dihasilkan setiap tahunnya (Sustainable Waste Indonesia). Masalah sampah plastik ini menjadi tantangan besar bagi keberlanjutan lingkungan, mengingat dampaknya yang merusak ekosistem dan mencemari lingkungan.
          </Text>
        </View>

        <ImpactSection />

        <WhatWeDoSection />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Advantages of Taking Action for the Environment</Text>
          <Text style={styles.sectionSubtitle}>Kontribusi Anda Membawa Kebaikan untuk Masa Depan</Text>
          <View style={styles.advantagesContainer}>
            <Card containerStyle={styles.advantagesCard}>
              <Text style={styles.cardTitle}>Lingkungan yang Lebih Sehat</Text>
              <Text style={styles.cardDescription}>
                Langkah kecil Anda membantu menjaga kualitas udara, air, dan tanah yang lebih bersih.
              </Text>
            </Card>
            <Card containerStyle={styles.advantagesCard}>
              <Text style={styles.cardTitle}>Ekonomi Lokal yang Lebih Kuat</Text>
              <Text style={styles.cardDescription}>
                Mendukung produk ramah lingkungan turut membantu pertumbuhan UMKM lokal.
              </Text>
            </Card>
            <Card containerStyle={styles.advantagesCard}>
              <Text style={styles.cardTitle}>Efisiensi dan Kenyamanan Hidup</Text>
              <Text style={styles.cardDescription}>
                Menggunakan teknologi ramah lingkungan memberikan kenyamanan dan penghematan jangka panjang.
              </Text>
            </Card>
            <Card containerStyle={styles.advantagesCard}>
              <Text style={styles.cardTitle}>Rasa Bangga dan Kepuasan</Text>
              <Text style={styles.cardDescription}>
                Anda menjadi bagian dari solusi untuk bumi yang lebih baik bagi generasi mendatang.
              </Text>
            </Card>
          </View>
        </View>


        <View style={styles.section}>
          <Text style={[styles.wordsText, styles.boldText, { textAlign: 'center' }]}>
            "Don't be a part of the problem, but be a part of the solution."
          </Text>
          <Text style={[styles.inspiringText, styles.boldText, { textAlign: 'center' }]}>
            Mari bersama-sama membuat perubahan kecil mulai dari sekarang bersama Ecolution.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};


const ImpactSection = () => {
  const impactData = [
    { id: 1, title: 'Pencemaran Lingkungan', description: 'Sampah plastik mencemari tanah, sungai, hingga lautan', image: require('../assets/impact1.jpeg') },
    { id: 2, title: 'Efek pada Kesehatan', description: 'Mikroplastik ditemukan dalam air, makanan, dan udara yang dihirup', image: require('../assets/impact2.jpeg') },
    { id: 3, title: 'Pemanasan Global', description: 'Pengolahan sampah yang tidak tepat dapat meningkatkan efek rumah kaca dan perubahan iklim', image: require('../assets/impact3.jpeg') },
    { id: 4, title: 'Bahaya bagi Ekosistem', description: 'Sampah dapat mengganggu ekosistem makhluk hidup', image: require('../assets/impact4.jpeg') },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>The Impact</Text>
      <Text style={styles.sectionSubtitle}>Apa yang Terjadi Jika Kita Diam?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.impactContainer}>
        {impactData.map((item) => (
          <Card key={item.id} containerStyle={styles.card}>
            <Image source={item.image} style={styles.impactImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};


const WhatWeDoSection = () => {
  const whatWeDoData = [
    { id: 1, title: 'Meningkatkan Edukasi dan Kesadaran', description: 'Mengajarkan pentingnya peduli lingkungan kepada masyarakat luas.', image: require('../assets/product1.jpeg') },
    { id: 2, title: 'Mendukung Produk Ramah Lingkungan', description: 'Memilih dan mempromosikan produk-produk yang mendukung keberlanjutan.', image: require('../assets/product2.jpeg') },
    { id: 3, title: 'Mengurangi dan Mengelola Sampah', description: 'Mengurangi konsumsi plastik sekali pakai dan meningkatkan daur ulang.', image: require('../assets/product3.jpeg') },
    { id: 4, title: 'Memanfaatkan Teknologi Hijau', description: 'Menggunakan teknologi untuk menciptakan solusi yang ramah lingkungan.', image: require('../assets/product4.jpg') },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>What Can We Do?</Text>
      <Text style={styles.sectionSubtitle}>Langkah Kecil untuk Perubahan yang Besar</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.impactContainer}>
        {whatWeDoData.map((item) => (
          <Card key={item.id} containerStyle={styles.cardHorizontal}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Image source={item.image} style={styles.cardImage} />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 15,
    paddingTop: 25,
  },
  imageBackground: {
    flex: 1,
  },
  header: {
    backgroundColor: '#006400',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  learnMoreButton: {
    marginTop: 10,
    backgroundColor: '#28a745',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  learnMoreButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 2,
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C6B2F',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4B9E4A',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
    color: '#4C9B4C',
    lineHeight: 20,
    textAlign: 'justify',
  },
  boldText: {
    fontWeight: 'bold',
  },
  impactContainer: {
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 0,
  },
  card: {
    width: 160,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
  },
  advantagesContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  advantagesCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  impactImage: {
    width: 135,
    height: 120,
    marginBottom: -3,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C6B2F',
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#4C9B4C',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  cardHorizontal: {
    width: 250,
    backgroundColor: '#fff',
    padding: 15,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
  },
  cardImage: {
    width: 220,
    height: 130,
    marginBottom: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 10,
  },
  inspiringText: {
    fontSize: 14,
    color: '#367E18',
    lineHeight: 13,
    fontWeight: 'normal',
    marginBottom: 20,
  },
  wordsText: {
    fontSize: 12,
    color: '#FF6868',
    lineHeight: 16,
    fontWeight: 'normal',
    marginBottom: 10,
  },
});

export default HomeScreen;
