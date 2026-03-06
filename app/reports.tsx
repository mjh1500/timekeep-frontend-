import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const API_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

export default function ReportsScreen() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!email.trim()) return Alert.alert('Enter email');
    setSending(true);
    try {
      const res = await fetch(`${API_URL}/api/send-daily-report`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient_email: email.trim() })
      });
      if (res.ok) {
        Alert.alert('Sent!', `Report sent to ${email}`);
        setEmail('');
      } else {
        Alert.alert('Error', 'Failed to send');
      }
    } catch (e) { Alert.alert('Error'); }
    finally { setSending(false); }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Ionicons name="mail" size={24} color="#4ade80" />
          <Text style={styles.title}>Email Daily Report</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.desc}>Send today's time tracking summary to an email.</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter email..." placeholderTextColor="#6b7280" keyboardType="email-address" autoCapitalize="none" />
          <TouchableOpacity style={styles.btn} onPress={handleSend} disabled={sending}>
            {sending ? <ActivityIndicator color="#fff" /> : <><Ionicons name="send" size={20} color="#fff" /><Text style={styles.btnText}>Send Report</Text></>}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f23' },
  section: { padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 12 },
  card: { backgroundColor: '#1a1a2e', borderRadius: 16, padding: 20 },
  desc: { color: '#9ca3af', marginBottom: 16 },
  input: { backgroundColor: '#0f0f23', padding: 16, borderRadius: 12, color: '#fff', marginBottom: 16 },
  btn: { backgroundColor: '#16a34a', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600', marginLeft: 8 },
});
