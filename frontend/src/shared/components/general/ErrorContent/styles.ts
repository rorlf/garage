import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { spacing } from 'shared/utils/styles';
import { useTheme } from 'store/slices/themeSlice';

export default function useStyles() {
  const { colors } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      tryAgainContainer: {
        borderRadius: spacing(3),
        borderWidth: 1,
        borderColor: colors.divisorColor,
        paddingHorizontal: spacing(4),
        paddingVertical: spacing(2),
        marginTop: spacing(5),
      },
    });
  }, [colors]);
}
