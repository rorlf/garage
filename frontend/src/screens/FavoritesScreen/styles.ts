import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { metrics } from 'shared/styles/metrics';
import { spacing } from 'shared/utils/styles';
import { useTheme } from 'store/slices/themeSlice';

export default function useStyles() {
  const { colors } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      screen: {
        flex: 1,
        paddingHorizontal: metrics.screenPadding,
        backgroundColor: colors.screenBackground,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: spacing(2),
        paddingTop: spacing(4),
      },
      title: {
        color: colors.textColor,
      },
      emptyLabel: {
        textDecorationLine: 'underline',
      },
      footer: {
        marginBottom: metrics.footer,
      },
    });
  }, [colors]);
}
