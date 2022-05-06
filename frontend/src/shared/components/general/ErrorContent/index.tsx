import React from 'react';

// Components
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Body } from 'shared/components/typographies';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Hooks
import { useTheme } from 'store/slices/themeSlice';
import useStyles from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  message: string;
  onPressRetry: () => void;
}

export const ErrorContent = ({ message, onPressRetry, style }: Props) => {
  const { colors } = useTheme();
  const styles = useStyles();

  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons name="alert" size={60} color={colors.error} />
      <Body>{message}</Body>
      <TouchableOpacity style={styles.tryAgainContainer} onPress={onPressRetry}>
        <Body>Try Again</Body>
      </TouchableOpacity>
    </View>
  );
};
