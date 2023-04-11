import React from 'react';
import { useShortcutContext } from '../../store/shortcut';
import styles from './styles.module.css';

export const ShortcutList = () => {
  const { shortcuts } = useShortcutContext();

  return (
    <div className={styles.container}>
      <div>
        {Object.keys(shortcuts).map((shortcut, index) => (
          <div key={`${index}-${shortcut}`}>
            <h3>Component {shortcuts[shortcut].componentName}</h3>
            <p>{`"${shortcut}" : ${shortcuts[shortcut].description}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
