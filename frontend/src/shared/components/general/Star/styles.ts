import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'store/slices/themeSlice';

export default function useStyles() {
  const { colors } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      text: {
        color: colors.textColor,
      },
    });
  }, [colors]);
}
