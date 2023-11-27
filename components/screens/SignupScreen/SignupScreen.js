import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    console.warn('EmailConfirmation');
    navigation.navigate('EmailConfirmation');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Nicol.png')}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.root}>
            <Text style={styles.title}>Crie uma conta!</Text>

            <CustomInput
              placeholder="Usuário"
              value={username}
              setValue={setUsername}
            />
            <CustomInput
              placeholder="Email"
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder="Senha"
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />
            <CustomInput
              placeholder="Repita a Senha"
              value={passwordRepeat}
              setValue={setPasswordRepeat}
              secureTextEntry={true}
            />

            <CustomButton text="Registrar" onPress={onRegisterPressed} />
            <Text style={styles.text}>
              Ao se registrar, você confirma que aceita nossos termos de uso e política de privacidade.
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C004A'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.7
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#4795FF',
    marginBottom: 6,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    width: '20%',
    borderColor: '#000000',
  },

  text: {
    color: 'orange',
    marginVertical: 10,
    alignSelf: 'center',
    fontWeight: '600',
    backgroundColor: 'white',
  },
});

export default SignupScreen;
