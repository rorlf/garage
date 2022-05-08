import React from 'react';

// Components
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Body } from 'shared/components/typographies';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

// Styles
import useStyles from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  message: string;
  onPressRetry: () => void;
  retryTestID?: string;
  testID?: string;
}

export const ErrorContent = ({
  message,
  onPressRetry,
  style,
  retryTestID,
  testID,
}: Props) => {
  const { colors } = useTheme();
  const styles = useStyles();

  return (
    <View testID={testID} style={[styles.container, style]}>
      <MaterialCommunityIcons name="alert" size={60} color={colors.error} />
      <Body>{message}</Body>
      <TouchableOpacity
        testID={retryTestID}
        style={styles.tryAgainContainer}
        onPress={onPressRetry}
      >
        <Body>Try Again</Body>
      </TouchableOpacity>
    </View>
  );
};
