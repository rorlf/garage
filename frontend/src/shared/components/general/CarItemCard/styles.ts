import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { spacing } from 'shared/utils/styles';
import { useTheme } from 'store/slices/themeSlice';

export default function useStyles() {
  const { width: deviceWidth } = useWindowDimensions();
  const { colors } = useTheme();

  return useMemo(() => {
    return StyleSheet.create({
      card: {
        backgroundColor: colors.cardColor,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 2,
        marginTop: spacing(5),
      },
      carImage: {
        width: '100%',
        height: deviceWidth * 0.5,
      },
      details: {
        color: colors.textColor,
        padding: spacing(4),
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: spacing(3),
      },
      model: {
        fontSize: 30,
      },
      line: {
        height: 1,
        backgroundColor: colors.divisorColor,
        marginVertical: spacing(3),
      },
      makeYear: {
        paddingVertical: spacing(3),
      },
    });
  }, [colors, deviceWidth]);
}
