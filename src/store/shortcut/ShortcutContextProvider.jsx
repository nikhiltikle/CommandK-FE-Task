import { useState } from 'react';
import PropTypes from 'prop-types';
import { ShortcutContext } from './shortcutContext';

export const ShortcutContextProvider = ({ children }) => {
  const [shortcuts, setShortcuts] = useState({});

  const handleSetShortcuts = (inputShortcuts) => {
    setShortcuts((oldShortcuts) => ({ ...oldShortcuts, ...inputShortcuts }));
  };

  return (
    <ShortcutContext.Provider
      value={{ shortcuts, setShortcuts: handleSetShortcuts }}
    >
      {children}
    </ShortcutContext.Provider>
  );
};

ShortcutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
