import styles from './Comment.module.css';

import { Comments } from '../interfaceComments';

import { formatDistanceToNow } from 'date-fns';
import { ArrowBendUpLeft, Pencil, Trash } from 'phosphor-react';

interface CommentNProps {
    comment: Comments;
    onGetReplais: (commentId: Comments['id']) => Comments[];
    currentUserId: number;
    onDeleteComment: (commentId: Comments['id']) => void;
}

export function CommentN({ comment, onGetReplais, currentUserId, onDeleteComment }: CommentNProps) {
    const publishedDateRelativeToNow = formatDistanceToNow(comment.createdAt, {
        addSuffix: true,
    });

    function handleReplais(comment: Comments['id']) {
        return onGetReplais(comment)
    }

    const replais = onGetReplais(comment.id);

    const canReplay = Boolean(currentUserId);
    const canDeleteOrEdit = currentUserId === comment.userId;

    return (
        <>
            <div className={styles.container}>
                <header>
                    <div className={styles.author}>
                        <img src={comment.userAvatar} />
                        <strong>{comment.userName}</strong>
                        <time title={comment.createdAt.toDateString()}>{publishedDateRelativeToNow}</time>
                    </div>
                    <div className={styles.icons}>
                        {canReplay && 
                            <button className={styles.replay}>
                                <ArrowBendUpLeft weight="bold"/>
                                Replay
                            </button>
                        }
                        {canDeleteOrEdit && 
                            <button className={styles.delete} onClick={() => onDeleteComment(comment.id)}>
                                <Trash weight="bold"/>
                                Delete
                            </button>
                        }
                        {canDeleteOrEdit &&
                            <button className={styles.edit}>
                                <Pencil weight="fill"/>
                                Edit
                            </button>
                        }

                    </div>
                </header>

                <p>{comment.content}</p>
            </div>
            <div className={styles.subCommentWrapper}>
                {replais.length > 0 && (replais.map((replay) => {
                    return (
                        <CommentN 
                            comment={replay} 
                            onGetReplais={handleReplais} 
                            currentUserId={currentUserId}
                            onDeleteComment={onDeleteComment}
                        />
                    )
                }))}
            </div>
        </>
    );
}