import { createContext } from 'react';

export const ShortcutContext = createContext({
  shortcuts: {},
  setShortcuts: () => {},
});
