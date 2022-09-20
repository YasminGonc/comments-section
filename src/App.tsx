import './global.css';
import styles from './App.module.css';

import { PrincipalComment } from './components/PrincipalComment/PrincipalComment';
import { SubComment } from './components/SubComment/SubComment';
import { Comments } from './components/Comments/Comments';

export function App() {

  return (
    <div className={styles.wrapper}>
      {/* <PrincipalComment /> */}
      <Comments currentUserId={3} />
  
    </div>

  );
}
