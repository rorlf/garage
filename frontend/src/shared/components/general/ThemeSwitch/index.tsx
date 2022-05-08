import React from 'react';

// Components
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

// Hooks
import { toggleTheme, useTheme } from 'store/slices/themeSlice';
import { useDispatch } from 'store/hooks';

// Styles
import useStyles from './styles';

interface Props {
  testID?: string;
}

export const ThemeSwitch = ({ testID }: Props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { isDark, colors } = useTheme();

  function toggle() {
    dispatch(toggleTheme());
  }

  return (
    <TouchableOpacity testID={testID} onPress={toggle} style={styles.container}>
      <FontAwesome
        size={20}
        color={colors.textColor}
        name={isDark ? 'moon-o' : 'sun-o'}
      />
    </TouchableOpacity>
  );
};
