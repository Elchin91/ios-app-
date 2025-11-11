import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { QrCode, Send, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import { Text, Button, Card } from '@/components/ui';
import { tokens } from '@/constants/tokens';

export default function HomeTab() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = '39';

  return (
    <LinearGradient
      colors={[tokens.color.gradientStart, tokens.color.gradientEnd]}
      style={styles.gradient}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.qrButton}>
          <QrCode color={tokens.color.iconPrimary} size={tokens.iconSize.md} />
        </TouchableOpacity>
        <Text size="lg" weight="semibold">Мой QR</Text>
      </View>

      <Card style={styles.balanceCard}>
        <View style={styles.balanceHeader}>
          <Text size="sm" color="secondary">Доступно</Text>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            {showBalance ? (
              <Eye color={tokens.color.iconSecondary} size={tokens.iconSize.md} />
            ) : (
              <EyeOff color={tokens.color.iconSecondary} size={tokens.iconSize.md} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.balanceAmount}>
          <Text size="display" weight="bold">
            {showBalance ? balance : '••••'}
          </Text>
          <Text size="xl" color="secondary" style={styles.balanceCurrency}>
            ₼
          </Text>
        </View>

        <View style={styles.actionButtons}>
          <Button variant="primary" size="lg" style={styles.actionButton}>
            + Пополнить
          </Button>
          <Button
            variant="primary"
            size="lg"
            leftIcon={<Send color={tokens.color.textInverse} size={18} />}
            style={styles.actionButton}
          >
            Перевести
          </Button>
        </View>
      </Card>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text size="lg" weight="bold">Мои платежи</Text>
          <Text size="xs" color="secondary">8 сохраненных платежей</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesScroll}>
        <ServiceCard
          icon="💛"
          title="Пожертвование в фонд «YASАТ»"
          color={tokens.color.accentNavy}
        />
        <ServiceCard
          icon="🚀"
          title="Скоро! Переводы за границу"
          color={tokens.color.accentCyan}
          textColor={tokens.color.textPrimary}
        />
        <ServiceCard
          icon="✨"
          title="Лотерея Birmarket"
          color={tokens.color.accentPink}
        />
        <ServiceCard
          icon="🌳"
          title="Переводы в Россию"
          color={tokens.color.accentLime}
          textColor={tokens.color.textPrimary}
        />
      </ScrollView>

      <View style={styles.section}>
        <Text size="lg" weight="bold">НАШИ СЕРВИСЫ</Text>
      </View>

      <Card pressable style={styles.creditCard}>
        <View style={styles.creditCardContent}>
          <Text size="xxxl" weight="bold" color="inverse">
            Кредит до 25 000m
          </Text>
          <View style={styles.creditImagePlaceholder}>
            <Text style={styles.creditImageText}>💰</Text>
          </View>
        </View>
      </Card>

      <Card pressable style={styles.serviceRow}>
        <View style={styles.serviceIcon}>
          <Text style={styles.serviceEmoji}>💳</Text>
        </View>
        <Text size="lg" weight="semibold">BakiKart</Text>
      </Card>

      <Card pressable style={styles.serviceRow}>
        <View style={styles.serviceIcon}>
          <Text style={styles.serviceEmoji}>🎁</Text>
        </View>
        <Text size="lg" weight="semibold">Bir Bonus</Text>
      </Card>

      <Card pressable style={styles.serviceRow}>
        <View style={styles.serviceIcon}>
          <Text style={styles.serviceEmoji}>📋</Text>
        </View>
        <Text size="lg" weight="semibold">Разработ НПС</Text>
      </Card>

      <View style={{ height: tokens.spacing.xl }} />
      </ScrollView>
    </LinearGradient>
  );
}

function ServiceCard({
  icon,
  title,
  color,
  textColor = '#FFFFFF',
}: {
  icon: string;
  title: string;
  color: string;
  textColor?: string;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.serviceCard,
        { backgroundColor: color },
      ]}
      activeOpacity={0.7}
    >
      <Text style={styles.serviceCardIcon}>{icon}</Text>
      <Text
        size="sm"
        weight="semibold"
        style={[styles.serviceCardTitle, { color: textColor }]}
        numberOfLines={2}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.xl,
  },
  qrButton: {
    width: tokens.iconSize.xl,
    height: tokens.iconSize.xl,
    borderRadius: tokens.iconSize.xl / 2,
    backgroundColor: tokens.color.surfacePrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: tokens.color.iconPrimary,
    marginRight: tokens.spacing.md,
    ...tokens.shadow.sm,
  },
  balanceCard: {
    marginHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
    borderRadius: tokens.borderRadius.xl,
    padding: tokens.spacing.xl,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: tokens.spacing.md,
  },
  balanceAmount: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: tokens.spacing.xl,
  },
  balanceCurrency: {
    marginLeft: tokens.spacing.xs,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
  },
  actionButton: {
    flex: 1,
  },
  section: {
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  servicesScroll: {
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
  },
  serviceCard: {
    width: 160,
    height: 120,
    borderRadius: tokens.borderRadius.lg,
    padding: tokens.spacing.md,
    marginRight: tokens.spacing.md,
    justifyContent: 'space-between',
  },
  serviceCardIcon: {
    fontSize: tokens.fontSize.xxxl,
  },
  serviceCardTitle: {
    lineHeight: 16,
  },
  creditCard: {
    marginHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.lg,
    backgroundColor: tokens.color.accentBlue,
    borderRadius: tokens.borderRadius.xl,
    padding: tokens.spacing.xl,
    minHeight: 160,
    justifyContent: 'flex-end',
  },
  creditCardContent: {
    position: 'relative',
  },
  creditImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: tokens.borderRadius.sm,
    position: 'absolute',
    right: 0,
    top: -60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditImageText: {
    fontSize: tokens.fontSize.display,
  },
  serviceRow: {
    marginHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
    paddingVertical: tokens.spacing.lg,
    paddingHorizontal: tokens.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    backgroundColor: tokens.color.surfaceTertiary,
    borderRadius: tokens.borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: tokens.spacing.md,
  },
  serviceEmoji: {
    fontSize: tokens.fontSize.xl,
  },
});
