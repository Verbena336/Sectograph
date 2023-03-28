import styles from './Header.module.scss';
import React from 'react';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Weather</h1>
    </header>
  );
}
