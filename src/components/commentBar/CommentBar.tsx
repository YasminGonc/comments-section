import styles from './CommentBar.module.css';

import { ChangeEvent, FormEvent } from 'react';

import AvatarJuliosImg from '../../assets/avatar-juliusomo.webp';

interface CommentBarProps {
    onNewCommentChange: (commentText: string) => void;
    onCreateNewComment: () => void;
    inputValue: string;
}

export function CommentBar({ onNewCommentChange, onCreateNewComment, inputValue }: CommentBarProps) {

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onNewCommentChange(event.target.value);
    }

    function handleNewComment(event: FormEvent<HTMLFormElement>) {
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