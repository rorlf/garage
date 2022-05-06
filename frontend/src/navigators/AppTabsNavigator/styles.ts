import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { spacing } from 'shared/utils/styles';
import { useTheme } from 'store/slices/themeSlice';

export default function useStyles() {
  const { colors } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      tabBar: {
        backgroundColor: colors.cardColor,
        height: 52,
        paddingBottom: spacing(1),
      },
    });
  }, [colors]);
}
