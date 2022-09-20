import styles from './CommentBar.module.css';

import AvatarJuliosImg from '../../assets/avatar-juliusomo.webp';
import { ChangeEvent, FormEvent } from 'react';

interface CommentBarN {
    onNewComment: () => void;
    onNewCommentChange: (text: string, parentId?: number | null) => void;
    inputValue: string;
}

export function CommentBarN({onNewComment, onNewCommentChange, inputValue}: CommentBarN) {
    
    function handleonNewComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onNewComment();
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onNewCommentChange(event.target.value);
    }
    
    return(
        <form onSubmit={handleonNewComment} className={styles.containerForm}>
            <img src={AvatarJuliosImg}/>
            <textarea 
                
                name='comment' 
                value={inputValue}
                onChange={handleNewCommentChange}
                placeholder='Add a comment...'
            />
            <button type='submit'>Send</button>
        </form>
    );
}