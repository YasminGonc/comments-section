import './global.css';
import styles from './App.module.css';
import { Comment } from './components/comment/Comment';
import { CommentBar } from './components/commentBar/CommentBar';

import AvatarAmyImg from './assets/avatar-amyrobson.webp';
import AvatarMaxImg from './assets/avatar-maxblagun.webp';
import AvatarRamImg from './assets/avatar-ramsesmiron.webp';
import AvatarJuliosImg from './assets/avatar-juliusomo.webp';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Comment 
        avatarUrl={AvatarAmyImg}
        name='amyrobson'
        time='1 month ago'
        content='Impressive! Though it seems the drag feature could be improved. But overrall it looks increadible. You have nailed the design and the responsiveness at various breakpoints works really well.'
      />

      <Comment 
        avatarUrl={AvatarMaxImg}
        name='maxblagun'
        time='2 weeks ago'
        content='Whoa, your project looks awesome! How long have you been coding for? I am still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'
      />

      <div className={styles.subCommentWrapper}>
        <Comment 
          avatarUrl={AvatarRamImg}
          name='ramsesmiron'
          time='1 weeks ago'
          content='If you are still new, I would recommend focusing on the fundamental of HTML, CSS e JS before considering React. It is very tempting to jump ahead but lay a solid foundation first.'
        />

        <Comment 
          avatarUrl={AvatarJuliosImg}
          name='juliusomo'
          time='2 days ago'
          content='I could not agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.'
          isAuthor
        />
      </div>

      <CommentBar />
    </div>
  )
}
