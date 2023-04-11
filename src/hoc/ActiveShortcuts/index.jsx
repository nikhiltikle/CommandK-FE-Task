import PropTypes from 'prop-types';
import { useShortcutContext } from '../../store/shortcut';

export const ActiveShortcuts = ({ children }) => {
  const { shortcuts } = useShortcutContext();

  return children({ shortcuts });
};

ActiveShortcuts.propTypes = {
  children: PropTypes.func.isRequired,
};
