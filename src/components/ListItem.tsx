import React from 'react';
import styles from './ListItem.module.css';
import { ShoppingItem } from '../types';

interface Props {
  item: ShoppingItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ListItem: React.FC<Props> = ({ item, onToggle, onDelete }) => {
  return (
    <div className={`${styles.item} ${item.isCompleted ? styles.completed : ''}`}>
      <div className={styles.checkboxWrapper} onClick={() => onToggle(item.id)}>
        <div className={styles.checkbox}>
          {item.isCompleted && <span className={styles.checkIcon}>✓</span>}
        </div>
      </div>
      
      <div className={styles.content}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.categoryTag}>{item.category}</span>
      </div>

      <button className={styles.deleteBtn} onClick={() => onDelete(item.id)}>
        ✕
      </button>
    </div>
  );
};
