import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1a1a2e',
            borderTopColor: '#16213e',
            height: 85,
            paddingBottom: 25,
            paddingTop: 10,
          },
          tabBarActiveTintColor: '#4ade80',
          tabBarInactiveTintColor: '#6b7280',
          headerStyle: { backgroundColor: '#1a1a2e' },
          headerTintColor: '#fff',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="time-entry"
          options={{
            title: 'Clock In/Out',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="crew"
          options={{
            title: 'Crew',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="jobsites"
          options={{
            title: 'Jobsites',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="construct-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="reports"
          options={{
            title: 'Reports',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f23' },
});
