import React from 'react';
import styles from './ProgressBar.module.css';

interface Props {
  total: number;
  completed: number;
}

export const ProgressBar: React.FC<Props> = ({ total, completed }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>購物進度</span>
        <span className={styles.stats}>{completed} / {total}</span>
      </div>
      <div className={styles.track}>
        <div 
          className={styles.fill} 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className={styles.percentage}>{percentage}% 完成</div>
    </div>
  );
};
