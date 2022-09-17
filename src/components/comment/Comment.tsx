import styles from './Comment.module.css';

import { ArrowBendUpLeft, Pencil, Trash } from 'phosphor-react';

interface CommentProps {
    avatarUrl: string;
    name: string;
    time: string;
    content: string;
    isAuthor?: boolean;
}

export function Comment({
    avatarUrl,
    name,
    time,
    content,
    isAuthor = false,
}:CommentProps) {
    return(
        <div className={styles.container}>
            <header>
                <div className={styles.author}>
                    <img src={avatarUrl} />
                    <strong>{name}</strong>
                    <span>{time}</span>
                </div>
                <div className={styles.icons}>
                    <button className={isAuthor ? styles.displayNone : styles.replay}>
                        <ArrowBendUpLeft weight="bold"/>
                        Replay
                    </button>

                    <button className={isAuthor ? styles.delete : styles.displayNone}>
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
    );
}