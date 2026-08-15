import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>🌋 Guia dos Vulcões</Text>
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6'
        }}
        style={styles.image}
      />

      <Text style={styles.curiosity}>
        💡 Curiosidade: existem vulcões ativos no fundo dos oceanos!
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
  },

  header: {
    backgroundColor: '#FF6D00',
    padding: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD600',
  },

  image: {
    width: '90%',
    height: 220,
    margin: 20,
    borderRadius: 10,
  },

  curiosity: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: '#FFD600',
  },
});
