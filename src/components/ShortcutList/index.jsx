import React from 'react';
import styles from './styles.module.css';
import { ActiveShortcuts } from '../../hoc/ActiveShortcuts';

export const ShortcutList = () => {
  return (
    <div className={styles.container}>
      <div>
        <ActiveShortcuts>
          {({ shortcuts }) =>
            Object.keys(shortcuts).map((shortcut, index) => (
              <div key={`${index}-${shortcut}`}>
                <h3>Component {shortcuts[shortcut].componentName}</h3>
                <p>{`"${shortcut}" : ${shortcuts[shortcut].description}`}</p>
              </div>
            ))
          }
        </ActiveShortcuts>
      </div>
    </div>
  );
};
