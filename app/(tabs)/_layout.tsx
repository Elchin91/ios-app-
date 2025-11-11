import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Home, CreditCard, QrCode, Clock, User } from 'lucide-react-native';
import { tokens } from '@/constants/tokens';
import { FAB } from '@/components/ui/FAB';

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: tokens.color.textPrimary,
          tabBarInactiveTintColor: tokens.color.textSecondary,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: styles.tabBarIcon,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Главная',
            tabBarIcon: ({ color, size }) => (
              <Home color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            title: 'Платежи',
            tabBarIcon: ({ color, size }) => (
              <CreditCard color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="qr"
          options={{
            title: 'QR',
            tabBarIcon: ({ color, size }) => (
              <QrCode color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'История',
            tabBarIcon: ({ color, size }) => (
              <Clock color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Профиль',
            tabBarIcon: ({ color, size }) => (
              <User color={color} size={size} />
            ),
          }}
        />
      </Tabs>
      <FAB onPress={() => console.log('Help pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: tokens.color.surfacePrimary,
    borderTopColor: tokens.color.borderPrimary,
    borderTopWidth: 1,
    paddingBottom: tokens.spacing.sm,
    paddingTop: tokens.spacing.sm,
    height: tokens.layout.tabBarHeight,
  },
  tabBarLabel: {
    fontSize: tokens.fontSize.xs,
    marginTop: tokens.spacing.xs,
  },
  tabBarIcon: {
    marginBottom: tokens.spacing.xs,
  },
});
