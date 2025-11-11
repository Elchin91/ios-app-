import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import { tokens } from '@/constants/tokens';

export default function HistoryTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text size="display" weight="bold" color="primary">
          Операции
        </Text>
        <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
          <Text size="xl" color="primary">
            ⊖
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.emptyState}>
        <Text size="lg" weight="semibold" color="primary" style={styles.dateLabel}>
          9 ноября
        </Text>
        <Text size="md" color="secondary">
          Нет операций в этот день
        </Text>
      </View>
    </View>
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
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: tokens.borderRadius.round,
    backgroundColor: tokens.color.surfacePrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: tokens.color.borderPrimary,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.xl,
  },
  dateLabel: {
    marginBottom: tokens.spacing.sm,
  },
});
