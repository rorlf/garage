import React from 'react';

// Components
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

interface Props {
  isActive: boolean;
  onPress?: () => void;
}

export const Star = ({ isActive, onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign
        size={24}
        name={isActive ? 'star' : 'staro'}
        color={isActive ? colors.starColor : colors.textColor}
      />
    </TouchableOpacity>
  );
};
