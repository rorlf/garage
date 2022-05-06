import { ComponentType } from 'react';
import {
  createSharedElementStackNavigator,
  SharedElementSceneComponent,
} from 'react-navigation-shared-element';

export function wrapInSharedElementStack(
  Screen: SharedElementSceneComponent<any>,
  name: string
): ComponentType<any> {
  const SharedStack = createSharedElementStackNavigator();
  return () => (
    <SharedStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={name}
    >
      <SharedStack.Screen name={name} component={Screen} />
    </SharedStack.Navigator>
  );
}
