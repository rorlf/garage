import React from 'react';

// Components
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

interface Props {
  isActive: boolean;
  onPress?: () => void;
  testID?: string;
}

export const Star = ({ isActive, onPress, testID }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <AntDesign
        size={24}
        name={isActive ? 'star' : 'staro'}
        color={isActive ? colors.starColor : colors.textColor}
      />
    </TouchableOpacity>
  );
};
