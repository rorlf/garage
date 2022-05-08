import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export default function useStyles() {
  return useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
      },
    });
  }, []);
}
