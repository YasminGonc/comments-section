import styles from './CommentBar.module.css';
import AvatarJuliosImg from '../../assets/avatar-juliusomo.webp';

interface CommentBarProps {
    onNewCommentChange: (commentText: string) => any
    onCreateNewComment: () => any
    inputValue: string
}

export function CommentBar({ onNewCommentChange, onCreateNewComment, inputValue }: CommentBarProps) {

    function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        onNewCommentChange(event.target.value);
    }

    function handleNewComment(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onCreateNewComment();
    }

    return(
        <form onSubmit={handleNewComment} className={styles.containerForm}>
            <img src={AvatarJuliosImg}/>
            <textarea 
                onChange={handleNewCommentChange} 
                name='comment' 
                value={inputValue}
                required
                placeholder='Add a comment...'
            />
            <button type='submit'>Send</button>
        </form>
    );
}