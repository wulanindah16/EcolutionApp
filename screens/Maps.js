import React, { useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const Maps = () => {
  const webviewRef = useRef(null);
  const reloadWebView = () => {
    if (webviewRef.current) {
      webviewRef.current.reload();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Persebaran Eco Shops</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={reloadWebView}>
          <Text style={styles.buttonText}>Reload</Text>
        </TouchableOpacity>
      </View>

      <WebView
        ref={webviewRef} 
        source={{ uri: 'https://ecolution-app.netlify.app/' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eaf1e0', 
  },
  textContainer: {
    position: 'absolute',
    top: 20, 
    left: '50%', 
    transform: [{ translateX: -100 }], 
    backgroundColor: '#4B9E4A', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderBottomWidth: 0,
    zIndex: 1,
  },
  text: {
    color: '#fff', 
    fontSize: 22, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25, 
    right: 10, 
    zIndex: 2,
  },
  button: {
    backgroundColor: '#388E3C', 
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, 
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
  },
});

export default Maps;
