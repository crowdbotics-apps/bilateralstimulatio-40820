import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {// handle sign up logic
  };

  const handleLogin = () => {// handle login logic
  };

  const handleForgotPassword = () => {// handle forgot password logic
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled5");
      }}><Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.logo} /></Pressable>
      </View>
      <Pressable onPress={() => {
      navigation.navigate("Untitled6");
    }}><View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Create Password" secureTextEntry value={password} onChangeText={setPassword} />
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={handleRememberMe}>
            {rememberMe && <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={styles.checkboxIcon} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>I have read Terms and Conditions and Privacy Policy</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View></Pressable>
      <Pressable onPress={() => {
      navigation.navigate("Untitled7");
    }}><View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View></Pressable>
      <Pressable onPress={() => {
      navigation.navigate("Untitled8");
    }}><View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign in via Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign in via Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign in via Facebook</Text>
        </TouchableOpacity>
      </View></Pressable>
      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordButtonText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  formContainer: {
    marginBottom: 30
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  },
  checkboxLabel: {
    fontSize: 16
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc'
  },
  orText: {
    fontSize: 16,
    marginHorizontal: 10
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  socialButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  forgotPasswordButton: {
    flex: 1,
    alignItems: 'flex-start'
  },
  forgotPasswordButtonText: {
    fontSize: 16,
    color: '#000'
  },
  loginButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default WelcomeScreen;