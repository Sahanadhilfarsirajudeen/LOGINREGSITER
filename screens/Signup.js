import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const Signup = ({ navigation }) => {
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const showToast = (type, text1, text2) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      position: 'bottom',
    });
  };

  const handleSignUp = async () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    // Validate password complexity
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be 8 characters, contain atleast 2 numbers, and have 1 special character');
      return;
    }

    try {
      const userData = {
        IDnumber: idNumber,
        username: email,
        password: password,
      };

      console.log('SignUp Payload:', userData);

      const response = await axios.post('http://localhost:3000/auth/register', userData);

      console.log('User registration successful:', response.data);

      // Show success message
      showToast('success', 'Registration Successful', 'You have successfully registered. Now you can log in.');

      // Navigate to the login screen or any other action needed
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing up:', error);

      // Show error message
      showToast('error', 'Registration Failed', 'There was an error during registration. Please try again.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold',
marginVertical: 12, color: COLORS.black }}>
            Create Account
          </Text>

          <Text style={{ fontSize: 16, color: COLORS.black }}>Connect
with your friend today!</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400',
marginVertical: 8 }}>IDnumber</Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your ID number"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={{
                width: '80%',
              }}
              value={idNumber}
              onChangeText={(text) => setIdNumber(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400',
marginVertical: 8 }}>Username</Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{
                width: '100%',
              }}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError('');
              }}
            />
          </View>
          {emailError ? (
            <Text style={{ color: COLORS.error, fontSize: 12 }}>{emailError}</Text>
          ) : null}
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400',
marginVertical: 8 }}>Password</Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={true}
              style={{
                width: '100%',
              }}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError('');
              }}
            />
          </View>
          {passwordError ? (
            <Text style={{ color: COLORS.error, fontSize: 12 }}>{passwordError}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            width: '100%',
            height: 48,
            backgroundColor: COLORS.primary,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center',
marginVertical: 20 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        {/* ... (unchanged code) */}
      </View>
    </SafeAreaView>
  );
};

export default Signup;