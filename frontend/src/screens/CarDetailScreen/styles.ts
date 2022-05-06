import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { metrics } from 'shared/styles/metrics';
import { spacing } from 'shared/utils/styles';
import { useTheme } from 'store/slices/themeSlice';

export default function useStyles() {
  const { colors } = useTheme();
  const { width: deviceWidth } = useWindowDimensions();

  return useMemo(() => {
    return StyleSheet.create({
      screen: {
        flex: 1,
        paddingHorizontal: metrics.screenPadding,
        backgroundColor: colors.screenBackground,
        justifyContent: 'center',
      },
      backButtonContainer: {
        position: 'absolute',
        top: spacing(4),
        left: spacing(4),
      },
    });
  }, [colors, deviceWidth]);
}
