import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { getRandomColor } from '../../utils/color';
import { KeyboardShortcut } from '../KeyboardShortcut';

export const Box = ({ id, shortcutDetail, bgColor }) => {
  const { combo, description, componentName } = shortcutDetail;

  // Callback function to change color on key press
  const turnBgColor = () => {
    const container = document.getElementById(id);
    container.style.backgroundColor = getRandomColor();
  };

  return (
    <div
      id={id}
      className={styles.container}
      style={{ '--box-bg-color': bgColor }}
    >
      <KeyboardShortcut
        combo={combo}
        callback={turnBgColor}
        description={description}
        componentName={componentName}
      />

      <div className={styles.box}>
        <p className={styles.text}>Component {componentName}</p>
      </div>
    </div>
  );
};

Box.propTypes = {
  /** To change the background color */
  id: PropTypes.string.isRequired,
  /** Initial backgruond color */
  bgColor: PropTypes.string.isRequired,
  /** Shortcut details */
  shortcutDetail: PropTypes.shape({
    /** Combination of keys */
    combo: PropTypes.string.isRequired,
    /** Description to show in shortcut list */
    description: PropTypes.string.isRequired,
    /** Component name to show in shortcut list */
    componentName: PropTypes.string.isRequired,
  }).isRequired,
};
