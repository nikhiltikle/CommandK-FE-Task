import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { keypressListener } from '../../utils/keypress';
import { useShortcutContext } from '../../store/shortcut';

export const KeyboardShortcut = ({
  combo,
  callback,
  description,
  componentName,
}) => {
  const { shortcuts, setShortcuts } = useShortcutContext();
  const listener = keypressListener;

  useEffect(() => {
    // register the shortcut combo on component mount
    if (!shortcuts[combo]) {
      listener.simple_combo(combo, callback);
      setShortcuts({ [combo]: { description, componentName } });
    }

    // unregister the shortcut combo on component unmount
    return () => {
      listener.unregister_combo(combo);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

KeyboardShortcut.propTypes = {
  /** Combination of keys */
  combo: PropTypes.string.isRequired,
  /** Callback function, calls on key press */
  callback: PropTypes.func.isRequired,
  /** Description to show in shortcut list */
  description: PropTypes.string.isRequired,
  /** Component name to show in shortcut list */
  componentName: PropTypes.string.isRequired,
};
