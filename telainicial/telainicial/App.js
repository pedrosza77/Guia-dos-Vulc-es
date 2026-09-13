import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  SafeAreaView,
  StatusBar,
  Alert
} from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const volcanoes = [
    {
      id: '1',
      name: 'Monte Vesúvio',
      location: 'Campânia, Itália',
      type: 'Estratovulcão (Ativo)',
      image: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=500&q=80',
    },
    {
      id: '2',
      name: 'Monte Fuji',
      location: 'Honshu, Japão',
      type: 'Estratovulcão (Ativo)',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500&q=80',
    },
    {
      id: '3',
      name: 'Kilauea',
      location: 'Havaí, EUA',
      type: 'Vulcão em Escudo',
      image: 'https://images.unsplash.com/photo-1619266465172-02a74c3f2541?w=500&q=80',
    },
  ];

  const filteredVolcanoes = volcanoes.filter((v) =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#D32F2F" />

      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>🌋 Vulcanopedia</Text>
          <Text style={styles.headerSubtitle}>Guia Completo de Vulcões</Text>
        </View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/785/785116.png' }}
          style={styles.headerIcon}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome ou localização..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.featuredCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80' }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredBadgeText}>ALERTA DE ATIVIDADE</Text>
          </View>
          <Text style={styles.featuredTitle}>Erupções Recentes</Text>
          <Text style={styles.featuredDescription}>
            Fique atento às atualizações do Anel de Fogo do Pacífico e relatórios de monitoramento vulcânico em tempo real.
          </Text>
          <Pressable
            style={styles.featuredButton}
            onPress={() => Alert.alert('Guia de Segurança', 'Siga sempre as orientações das autoridades locais durante uma erupção.')}
          >
            <Text style={styles.featuredButtonText}>Ver Dicas de Segurança</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Vulcões Populares</Text>

        {filteredVolcanoes.length > 0 ? (
          filteredVolcanoes.map((item) => (
            <View key={item.id} style={styles.volcanoCard}>
              <Image source={{ uri: item.image }} style={styles.volcanoImage} />
              <View style={styles.volcanoInfo}>
                <Text style={styles.volcanoName}>{item.name}</Text>
                <Text style={styles.volcanoLocation}>📍 {item.location}</Text>
                <Text style={styles.volcanoType}>{item.type}</Text>
                <Pressable
                  style={styles.detailsButton}
                  onPress={() => Alert.alert('Detalhes', `Explorando mais sobre: ${item.name}`)}
                >
                  <Text style={styles.detailsButtonText}>Explorar Vulcão</Text>
                </Pressable>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>Nenhum vulcão encontrado.</Text>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.footerTab} onPress={() => Alert.alert('Navegação', 'Você já está no Início')}>
          <Text style={styles.footerTabTextActive}>🔥 Início</Text>
        </Pressable>
        <Pressable style={styles.footerTab} onPress={() => Alert.alert('Navegação', 'Abrindo Mapa')}>
          <Text style={styles.footerTabText}>🗺️ Mapa</Text>
        </Pressable>
        <Pressable style={styles.footerTab} onPress={() => Alert.alert('Navegação', 'Abrindo Favoritos')}>
          <Text style={styles.footerTabText}>⭐ Favoritos</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#D32F2F',
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FF6F00',
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#FFCC80',
    marginTop: 2,
  },
  headerIcon: {
    width: 36,
    height: 36,
    tintColor: '#FFF',
  },
  searchContainer: {
    padding: 14,
    backgroundColor: '#1E1E1E',
  },
  searchInput: {
    backgroundColor: '#2A2A2A',
    color: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E65100',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 20,
  },
  featuredCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FF3D00',
  },
  featuredImage: {
    width: '100%',
    height: 160,
  },
  featuredBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#D32F2F',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  featuredBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F00',
    marginHorizontal: 14,
    marginTop: 12,
  },
  featuredDescription: {
    fontSize: 13,
    color: '#CCC',
    marginHorizontal: 14,
    marginTop: 6,
    lineHeight: 18,
  },
  featuredButton: {
    backgroundColor: '#E65100',
    margin: 14,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  featuredButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF3D00',
    paddingLeft: 8,
  },
  volcanoCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  volcanoImage: {
    width: 110,
    height: 110,
  },
  volcanoInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  volcanoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  volcanoLocation: {
    fontSize: 12,
    color: '#BBB',
    marginTop: 2,
  },
  volcanoType: {
    fontSize: 11,
    color: '#FF8F00',
    marginTop: 2,
  },
  detailsButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  detailsButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  noResultsText: {
    color: '#AAA',
    textAlign: 'center',
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderTopWidth: 2,
    borderTopColor: '#FF6F00',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  footerTab: {
    alignItems: 'center',
  },
  footerTabTextActive: {
    color: '#FF5722',
    fontWeight: 'bold',
  },
  footerTabText: {
    color: '#888',
  },
});