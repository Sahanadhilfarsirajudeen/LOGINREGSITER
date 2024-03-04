import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import COLORS from '../constants/colors';

const Signup = ({ navigation }) => {
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const showToast = (type, text1, text2) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      position: 'center',
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
      setPasswordError('Password must be at least 8 characters, contain 2 numbers, and have 1 special character');
      return;
    }

    try {
      const userData = {
        IDnumber: idNumber,
        Fullname: fullName,
        gender: gender,
        username: email,
        password: password,
      };

      const response = await axios.post('http://192.168.1.104:3000/auth/register', userData);

      console.log('User registration successful:', response.data);

      // Show success message
      showToast('success', 'Registration Successful', 'You have successfully registered. Now you can log in.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing up:', error);

      // Show error message
      showToast('error', 'Registration Failed', 'There was an error during registration. Please try again.');
    }
  };

  const renderGenderButton = (value, label) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
        backgroundColor: gender === value ? COLORS.primary : 'transparent',
      }}
      onPress={() => setGender(value)}
    >
      <Text style={{ color: gender === value ? COLORS.white : COLORS.primary }}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <Image source={require("../assets/register_image.png")} style={{ width: '100%', height: 100, marginBottom: 20 }} />

          <View style={{ marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
              Create Account
            </Text>
            <Text style={{ fontSize: 16, color: COLORS.black }}>Connect with your friend today!</Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>ID Number</Text>
            <TextInput
              placeholder="Enter your ID number"
              keyboardType="numeric"
              style={{ height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 12 }}
              value={idNumber}
              onChangeText={setIdNumber}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Full Name</Text>
            <TextInput
              placeholder="Enter your Full name"
              style={{ height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 12 }}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Gender</Text>
            <View style={{ flexDirection: 'row' }}>
              {renderGenderButton('Male', 'Male')}
              {renderGenderButton('Female', 'Female')}
              {renderGenderButton('Others', 'Others')}
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              keyboardType="email-address"
              style={{ height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 12 }}
              value={email}
              onChangeText={setEmail}
            />
            {emailError ? <Text style={{ color: COLORS.error, fontSize: 12 }}>{emailError}</Text> : null}
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry
              style={{ height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 12 }}
              value={password}
              onChangeText={setPassword}
            />
            {passwordError ? <Text style={{ color: COLORS.error, fontSize: 12 }}>{passwordError}</Text> : null}
          </View>

          <Button title="Signup" filled onPress={handleSignUp} />

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 22 }}>
            <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: 'bold', marginLeft: 6 }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;