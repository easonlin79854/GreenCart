import React, { useState } from 'react';
import styles from './AddItemForm.module.css';
import { Category, CATEGORIES } from '../types';

interface Props {
  onAdd: (name: string, category: Category) => void;
}

export const AddItemForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category>('生鮮食品');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim(), category);
      setName('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="想要買什麼？"
          className={styles.input}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className={styles.select}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit" className={styles.button}>
          新增
        </button>
      </div>
    </form>
  );
};
