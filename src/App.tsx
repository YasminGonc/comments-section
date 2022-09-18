import './global.css';
import styles from './App.module.css';
import { Comment } from './components/comment/Comment';
import { CommentBar } from './components/commentBar/CommentBar';

import AvatarAmyImg from './assets/avatar-amyrobson.webp';
import AvatarMaxImg from './assets/avatar-maxblagun.webp';
import AvatarRamImg from './assets/avatar-ramsesmiron.webp';
import AvatarJuliosImg from './assets/avatar-juliusomo.webp';

export function App() {
  const comments = [
    {
      id: 1,
      author: {
        avatar: AvatarAmyImg,
        name: 'amyrobson'
      },
      time: new Date('2022-08-17 22:02:00'),
      content:'Impressive! Though it seems the drag feature could be improved. But overrall it looks increadible. You have nailed the design and the responsiveness at various breakpoints works really well.',
      isAuthor: false
    },
    {
      id: 2,
      author: {
        avatar: AvatarMaxImg,
        name: 'maxblagun'
      },
      time: new Date('2022-09-03 23:00:00'),
      content:'Whoa, your project looks awesome! How long have you been coding for? I am still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
      isAuthor: false
    }
  ];

  const subComments = [
    {
      id: 1,
      author: {
        avatar: AvatarRamImg,
        name: 'ramsesmiron'
      },
      time: new Date('2022-09-10 22:02:00'),
      content:'If you are still new, I would recommend focusing on the fundamental of HTML, CSS e JS before considering React. It is very tempting to jump ahead but lay a solid foundation first.',
      isAuthor: false
    },
    {
      id: 2,
      author: {
        avatar: AvatarJuliosImg,
        name: 'juliusomo'
      },
      time: new Date('2022-09-15 22:02:00'),
      content:'I could not agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
      isAuthor: true
    },
  ]

  return (
    <div className={styles.wrapper}>
      {comments.map(comment => {
        return (
          <Comment 
            author={comment.author}
            time={comment.time}
            content={comment.content}
            isAuthor={comment.isAuthor}
        />)
      })}
   
      <div className={styles.subCommentWrapper}>
      {subComments.map(comment => {
        return (
          <Comment 
            author={comment.author}
            time={comment.time}
            content={comment.content}
            isAuthor={comment.isAuthor}
        />)
      })}
      </div>

      <CommentBar />
    </div>
  )
}
