import React, { useMemo } from 'react';
import styles from './App.module.css';
import './styles/variables.css';
import { AddItemForm } from './components/AddItemForm';
import { ListItem } from './components/ListItem';
import { ProgressBar } from './components/ProgressBar';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ShoppingItem, Category } from './types';

const App: React.FC = () => {
  const [items, setItems] = useLocalStorage<ShoppingItem[]>('greencart-items', []);

  const addItem = (name: string, category: Category) => {
    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      name,
      category,
      isCompleted: false,
      createdAt: Date.now(),
    };
    setItems([newItem, ...items]);
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearCompleted = () => {
    setItems(items.filter((item) => !item.isCompleted));
  };

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (a.isCompleted === b.isCompleted) {
        return b.createdAt - a.createdAt;
      }
      return a.isCompleted ? 1 : -1;
    });
  }, [items]);

  const completedCount = items.filter((i) => i.isCompleted).length;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🛒</span>
          <h1>GreenCart</h1>
        </div>
        <p className={styles.subtitle}>您的簡約購物清單</p>
      </header>

      <main className={styles.main}>
        <ProgressBar total={items.length} completed={completedCount} />
        
        <AddItemForm onAdd={addItem} />

        <div className={styles.listHeader}>
          <h2>我的清單</h2>
          {completedCount > 0 && (
            <button className={styles.clearBtn} onClick={clearCompleted}>
              清除已完成
            </button>
          )}
        </div>

        <div className={styles.list}>
          {sortedItems.length > 0 ? (
            sortedItems.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onToggle={toggleItem}
                onDelete={deleteItem}
              />
            ))
          ) : (
            <div className={styles.empty}>
              <p>清單目前是空的，開始新增一些物品吧！</p>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 GreenCart - 讓購物更輕鬆</p>
      </footer>
    </div>
  );
};

export default App;
