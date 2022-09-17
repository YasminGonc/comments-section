import styles from './CommentBar.module.css';
import AvatarJuliosImg from '../../assets/avatar-juliusomo.webp';

export function CommentBar() {
    return(
        <div className={styles.container}>
            <img src={AvatarJuliosImg}/>
            <textarea placeholder='Add a comment...'/>
            <button>Send</button>
        </div>
    );
}