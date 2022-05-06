import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'store/slices/themeSlice';

export default function useStyles() {
  const { colors } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      container: {
        alignSelf: 'baseline',
        borderWidth: 1,
        borderColor: colors.divisorColor,
        borderRadius: 50,
        padding: 10,
        backgroundColor: colors.cardColor,
        alignItems: 'center',
      },
    });
  }, [colors]);
}
