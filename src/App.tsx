import './global.css';
import styles from './App.module.css';

import { Comments } from './components/Comments/Comments';

export function App() {

  return (
    <div className={styles.wrapper}>
  
      <Comments currentUserId={4} />
  
    </div>

  );
}
