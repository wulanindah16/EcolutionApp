import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Maps = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://ecolution-app.netlify.app/' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Maps
