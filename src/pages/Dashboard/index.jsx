import React from 'react';
import { ShortcutContextProvider } from '../../store/shortcut';
import { Box } from '../../components/Box';
import { ShortcutList } from '../../components/ShortcutList';
import styles from './styles.module.css';

export const Dashboard = () => {
  return (
    <ShortcutContextProvider>
      <div className={styles.container}>
        <Box
          id='compA'
          bgColor='rgb(79, 200, 24)'
          shortcutDetail={{
            combo: 'shift a',
            componentName: 'A',
            description: 'Toggle component A colour',
          }}
        />
        <Box
          id='compB'
          bgColor='rgb(129, 85, 209)'
          shortcutDetail={{
            combo: 'esc',
            componentName: 'B',
            description: 'Toggle component B colour',
          }}
        />
        <Box
          id='compC'
          bgColor='rgb(120, 102, 208)'
          shortcutDetail={{
            combo: 'alt ctrl c',
            componentName: 'C',
            description: 'Toggle component C colour',
          }}
        />
        <ShortcutList />
      </div>
    </ShortcutContextProvider>
  );
};
