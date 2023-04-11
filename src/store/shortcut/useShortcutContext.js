import { useContext } from 'react';
import { ShortcutContext } from './shortcutContext';

export const useShortcutContext = () => {
  const states = useContext(ShortcutContext);

  return { ...states };
};
