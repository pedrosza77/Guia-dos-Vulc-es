import React, { useState } from 'react';
import { Pressable, Image, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLygR6ZDxJkkeUyYNcHaZHhiAL1_dSNY28Pcd_gaA_g&s=10" }}
          style={styles.image}
        />
        <Text style={styles.headerTitle}>GUIA DE VULCÕES</Text>
      </View>

      {telaAtual === 'login' && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login de Explorador</Text>

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            placeholder="explorador@vulcao.com"
            style={styles.input}
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            placeholder="digite sua senha"
            secureTextEntry={true}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Entrar na Expedição"
              color="#d32f2f"
              onPress={() => alert("Bem-vindo de volta, explorador!")}
            />
          </View>

          <Pressable onPress={() => alert("Link de recuperação enviado ao seu e-mail!")}>
            <Text style={styles.link}>Esqueci a senha</Text>
          </Pressable>

          <Pressable onPress={() => setTelaAtual('cadastro')}>
            <Text style={styles.link}>Não tem conta? Criar conta</Text>
          </Pressable>
        </View>
      )}

      {telaAtual === 'cadastro' && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastro de Explorador</Text>

          <Text style={styles.label}>Nome do Explorador:</Text>
          <TextInput
            placeholder="ex: Indiana Jones"
            style={styles.input}
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            placeholder="crie uma senha forte"
            secureTextEntry={true}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Criar Conta de Explorador"
              color="#d32f2f"
              onPress={() => alert("Conta criada com sucesso! Prepare sua mochila.")}
            />
          </View>

          <Pressable onPress={() => setTelaAtual('login')}>
            <Text style={styles.link}>Já tem conta? Voltar ao Login</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9800',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#d32f2f',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#fff',
  },
  formContainer: {
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
  },
  link: {
    color: '#fff',
    marginTop: 12,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});