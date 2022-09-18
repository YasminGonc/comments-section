import { useState } from 'react';
import styles from './Comment.module.css';

import { formatDistanceToNow } from 'date-fns';
import { ArrowBendUpLeft, Pencil, Trash } from 'phosphor-react';
import { CommentBar } from '../commentBar/CommentBar';
import { SubComment } from '../SubComment/SubComment';

interface CommentProps {
    author: any;
    time: Date;
    content: string;
    isAuthor: boolean;
    onDeleteComment: () => any
}

export function Comment({
    author,
    time,
    content,
    isAuthor,
    onDeleteComment
}:CommentProps) {
    const publishedDateRelativeToNow = formatDistanceToNow(time, {
        addSuffix: true,
    });

    const [showReplayBox, setShowReplayBox] = useState<boolean>(false);

    function showReplay() {
        if (showReplayBox) {
           setShowReplayBox(false); 
        }
        else {
            setShowReplayBox(true); 
        }
    }

    function handleDeleteComment() {
        onDeleteComment();
    }

    return(
        <>
            <div className={styles.container}>
                <header>
                    <div className={styles.author}>
                        <img src={author.avatar} />
                        <strong>{author.name}</strong>
                        <time title={time.toDateString()}>{publishedDateRelativeToNow}</time>
                    </div>
                    <div className={styles.icons}>
                        <button onClick={showReplay} className={isAuthor ? styles.displayNone : styles.replay}>
                            <ArrowBendUpLeft weight="bold"/>
                            Replay
                        </button>

                        <button 
                            className={isAuthor ? styles.delete : styles.displayNone}
                            onClick={handleDeleteComment}
                        >
                            <Trash weight="bold"/>
                            Delete
                        </button>

                        <button className={isAuthor ? styles.edit : styles.displayNone}>
                            <Pencil weight="fill"/>
                            Edit
                        </button>
                    </div>
                </header>

                <p>{content}</p>

            </div>
        </>
    );
}