import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
  User,
  QrCode,
  Briefcase,
  Settings,
  FileText,
  Percent,
  CreditCard,
  HelpCircle,
  Globe,
  LogOut,
} from 'lucide-react-native';
import { tokens } from '@/constants/tokens';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ProfileTab() {
  const profileMenuItems = [
    {
      icon: User,
      title: 'Мои данные',
      color: tokens.color.accentPurple,
    },
    {
      icon: QrCode,
      title: 'Мой QR',
      color: tokens.color.accentPurple,
    },
  ];

  const menuItems = [
    {
      icon: Briefcase,
      title: 'Ведите свой бизнес с m10',
    },
    {
      icon: Settings,
      title: 'Настройки',
    },
    {
      icon: FileText,
      title: 'Документы',
    },
    {
      icon: Percent,
      title: 'Тарифы и лимиты',
    },
    {
      icon: CreditCard,
      title: 'Выписка со счета',
    },
    {
      icon: HelpCircle,
      title: 'Поддержка',
    },
    {
      icon: Globe,
      title: 'Язык',
      subtitle: 'Русский',
    },
    {
      icon: Globe,
      title: 'Карьера в PashaPay',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text size="display" weight="bold" color="primary">
          Профиль
        </Text>
        <Text size="lg" weight="semibold" color="primary" style={styles.phone}>
          +994 50 519 99 91
        </Text>
      </View>

      <View style={styles.profileGrid}>
        {profileMenuItems.map((item, index) => (
          <Card
            key={index}
            padding="lg"
            style={styles.profileCard}
            pressable
            onPress={() => {}}
          >
            <View
              style={[
                styles.profileCardIcon,
                { backgroundColor: item.color },
              ]}
            >
              <item.icon color={tokens.color.textInverse} size={tokens.iconSize.md} />
            </View>
            <Text size="sm" weight="semibold" color="primary" align="center">
              {item.title}
            </Text>
          </Card>
        ))}
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <Card
            key={index}
            padding="md"
            style={styles.menuItem}
            pressable
            onPress={() => {}}
          >
            <item.icon color={tokens.color.iconPrimary} size={tokens.iconSize.md} />
            <View style={styles.menuItemContent}>
              <Text size="md" weight="medium" color="primary">
                {item.title}
              </Text>
              {item.subtitle && (
                <Text size="sm" color="secondary" style={styles.menuItemSubtitle}>
                  {item.subtitle}
                </Text>
              )}
            </View>
            <Text size="xxl" color="secondary" style={styles.menuItemArrow}>
              ›
            </Text>
          </Card>
        ))}
      </View>

      <Button
        variant="secondary"
        fullWidth
        leftIcon={<LogOut color={tokens.color.controlDestructive} size={tokens.iconSize.md} />}
        style={styles.logoutButton}
        onPress={() => {}}
      >
        <Text size="md" weight="medium" color="destructive">
          Выйти из m10
        </Text>
      </Button>

      <View style={{ height: tokens.spacing.xl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.color.surfaceTertiary,
  },
  header: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.xl,
  },
  phone: {
    marginTop: tokens.spacing.sm,
  },
  profileGrid: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
  },
  profileCard: {
    flex: 1,
    alignItems: 'center',
  },
  profileCardIcon: {
    width: 48,
    height: 48,
    borderRadius: tokens.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: tokens.spacing.md,
  },
  menuSection: {
    paddingHorizontal: tokens.spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: tokens.spacing.sm,
  },
  menuItemContent: {
    flex: 1,
    marginLeft: tokens.spacing.md,
  },
  menuItemSubtitle: {
    marginTop: 2,
  },
  menuItemArrow: {
    lineHeight: tokens.fontSize.xxl,
  },
  logoutButton: {
    marginHorizontal: tokens.spacing.lg,
    marginTop: tokens.spacing.lg,
  },
});
