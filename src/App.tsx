import './global.css';
import styles from './App.module.css';

import { PrincipalComment } from './components/PrincipalComment/PrincipalComment';
import { SubComment } from './components/SubComment/SubComment';

export function App() {

  return (
    <div className={styles.wrapper}>
      <PrincipalComment />

   
      {/* <div className={styles.subCommentWrapper}>
        <SubComment />
      
      </div>  */}

    </div>
  );
}
