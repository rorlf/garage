import React from 'react';

// Components
import { AntDesign } from '@expo/vector-icons';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

interface Props {
  isActive: boolean;
}

export const Star = ({ isActive }: Props) => {
  const { colors } = useTheme();

  return (
    <AntDesign
      size={24}
      name={isActive ? 'star' : 'staro'}
      color={isActive ? colors.starColor : colors.textColor}
    />
  );
};
