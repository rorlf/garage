import React from 'react';

// Components
import { ActivityIndicator, View, ViewProps } from 'react-native';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

export const Loading = ({ ...viewProps }: ViewProps) => {
  const { colors } = useTheme();

  return (
    <View {...viewProps}>
      <ActivityIndicator size="large" color={colors.textColor} />
    </View>
  );
};
