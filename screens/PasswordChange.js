import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const PasswordChange = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const showToast = (type, text1, text2) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      position: 'bottom',
    });
  };

  const handleChangePassword = async () => {
    try {
      // Check if new password and confirm password match
      if (newPassword !== confirmPassword) {
        showToast('error', 'Password Error', 'Passwords do not match');
        return;
      }

      // Retrieve userId from localStorage
      const userId = localStorage.getItem('userId');

      // Perform password change
      const response = await axios.post('http://192.168.1.104:3000/auth/change-password', {
        userId,
        newPassword,
      });

      // Show success message
      showToast('success', 'Password Changed', 'Your password has been updated successfully.');

      // Navigate to login page or any other page as needed
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error changing password:', error);

      // Show error message
      showToast('error', 'Password Change Failed', 'There was an error while changing your password.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>New Password</Text>
          <TextInput
            placeholder="Enter your new password"
            secureTextEntry
            style={{ height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 12 }}
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm your new password"
            secureTextEntry
            style={{ height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 12 }}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <Button title="Update" filled onPress={handleChangePassword} />
      </View>
    </SafeAreaView>
  );
};

export default PasswordChange;
