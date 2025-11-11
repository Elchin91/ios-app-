import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Search, Flame } from 'lucide-react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { tokens } from '@/constants/tokens';

export default function PaymentsTab() {
  const payments = [
    { id: '1', name: 'Мой номер', icon: '📱', number: '' },
    { id: '2', name: 'Azercell', icon: '✡️', number: '102533806' },
    { id: '3', name: 'Azercell', icon: '✡️', number: '505199991' },
    { id: '4', name: 'Citel', icon: '📳', number: '45...' },
  ];

  const sections = [
    {
      title: 'Мобильные операторы',
      data: [{ text: 'Мобильные операторы', cashback: '2%' }],
    },
    {
      title: 'Коммунальные услуги',
      data: [{ text: 'Коммунальные услуги', cashback: '2%' }],
    },
    {
      title: 'Платежи',
      data: [{ text: 'BakiKart', icon: '💳' }],
    },
    {
      title: 'Услуги',
      data: [{ text: 'Банковские услуги', icon: '🏦' }],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text size="display" weight="bold" color="primary">
          Сервисы
        </Text>
        <Search color={tokens.color.iconPrimary} size={tokens.iconSize.md} />
      </View>

      <View style={styles.servicesGrid}>
        <View style={styles.gridRow}>
          <ServiceGridItem icon="🚗" title="Мой гараж" isNew />
          <ServiceGridItem
            icon="📋"
            title="Кабинет Azeriqaz"
            isNew
          />
        </View>
      </View>

      <View style={styles.paymentsSection}>
        <View style={styles.sectionHeader}>
          <Text size="lg" weight="bold" color="primary">
            Мои платежи
          </Text>
          <TouchableOpacity>
            <Text size="md" color="secondary">
              Все &gt;
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.paymentsScroll}
        >
          {payments.map((payment) => (
            <Card
              key={payment.id}
              pressable
              padding="md"
              style={styles.paymentCard}
            >
              <View style={styles.paymentCardContent}>
                <Text size="xxxl">{payment.icon}</Text>
                <Text size="sm" weight="semibold" color="primary" align="center">
                  {payment.name}
                </Text>
                {payment.number && (
                  <Text size="xs" color="secondary">
                    {payment.number}
                  </Text>
                )}
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.servicesContent} showsVerticalScrollIndicator={false}>
        {sections.map((section, index) => (
          <View key={index}>
            <Text
              size="sm"
              weight="semibold"
              color="secondary"
              style={styles.categoryTitle}
            >
              {section.title.toUpperCase()}
            </Text>
            {section.data.map((item, itemIndex) => (
              <Card
                key={itemIndex}
                pressable
                padding="md"
                style={styles.serviceItem}
              >
                {item.icon && <Text size="xl" style={styles.itemIcon}>{item.icon}</Text>}
                <View style={styles.itemContent}>
                  <Text size="md" weight="medium" color="primary">
                    {item.text}
                  </Text>
                </View>
                {item.cashback && (
                  <Badge
                    text={item.cashback}
                    variant="blue"
                    icon={<Flame color={tokens.color.textInverse} size={14} />}
                  />
                )}
              </Card>
            ))}
          </View>
        ))}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

function ServiceGridItem({
  icon,
  title,
  isNew,
}: {
  icon: string;
  title: string;
  isNew?: boolean;
}) {
  return (
    <Card pressable padding="lg" style={styles.gridItem}>
      {isNew && (
        <Badge text="Новинка" variant="green" style={styles.gridBadge} />
      )}
      <Text size="display" style={styles.gridIcon}>
        {icon}
      </Text>
      <Text size="lg" weight="semibold" color="primary">
        {title}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.color.surfaceTertiary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.xl,
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.lg,
  },
  servicesGrid: {
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
  },
  gridRow: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
  },
  gridItem: {
    flex: 1,
    height: 140,
    justifyContent: 'space-between',
  },
  gridBadge: {
    alignSelf: 'flex-start',
    marginBottom: tokens.spacing.sm,
  },
  gridIcon: {
    marginVertical: tokens.spacing.sm,
  },
  paymentsSection: {
    marginBottom: tokens.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.xl,
    marginBottom: tokens.spacing.md,
  },
  paymentsScroll: {
    paddingHorizontal: tokens.spacing.lg,
  },
  paymentCard: {
    width: 100,
    height: 120,
    marginRight: tokens.spacing.md,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentCardContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  servicesContent: {
    paddingHorizontal: tokens.spacing.lg,
  },
  categoryTitle: {
    marginTop: tokens.spacing.lg,
    marginBottom: tokens.spacing.sm,
  },
  serviceItem: {
    marginBottom: tokens.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: tokens.spacing.md,
  },
  itemContent: {
    flex: 1,
  },
  bottomSpacing: {
    height: tokens.spacing.xl,
  },
});
