import styles from './Comment.module.css';
import { Comments } from '../interfaceComments';
import { formatDistanceToNow } from 'date-fns';

interface CommentNProps {
    comment: Comments;
    onGetReplais: (commentId: Comments['id']) => Comments[];
}

export function CommentN({ comment, onGetReplais }: CommentNProps) {
    const publishedDateRelativeToNow = formatDistanceToNow(comment.createdAt, {
        addSuffix: true,
    });

    function handleReplais(comment: Comments['id']) {
        return onGetReplais(comment)
    }

    const replais = onGetReplais(comment.id);

    return (
        <>
            <div className={styles.container}>
                <header>
                    <div className={styles.author}>
                        <img src={comment.userAvatar} />
                        <strong>{comment.userName}</strong>
                        <time title={comment.createdAt.toDateString()}>{publishedDateRelativeToNow}</time>
                    </div>
                </header>

                <p>{comment.content}</p>
            </div>
            <div className={styles.subCommentWrapper}>
                {replais.length > 0 && (replais.map((replay) => {
                    return (
                        <CommentN comment={replay} onGetReplais={handleReplais}/>
                    )
                }))}
            </div>
        </>
    );
}