import styles from './Comment.module.css';

import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ArrowBendUpLeft, Pencil, Trash } from 'phosphor-react';

interface CommentProps {
    author: any;
    time: Date;
    content: string;
    isAuthor: boolean;
    hasComment: boolean;
    onDeleteComment: () => void;
}

export function Comment({
    author,
    time,
    content,
    isAuthor,
    hasComment,
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

            <div className={hasComment ? styles.displayComment : styles.displayNone}>
                    <p>tem comentário</p>
            </div>
        </>
    );
}