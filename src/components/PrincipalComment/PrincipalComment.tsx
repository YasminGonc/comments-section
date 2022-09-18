import { useState } from 'react';
import { Comment } from '../comment/Comment';
import { CommentBar } from '../commentBar/CommentBar';

import AvatarAmyImg from '../../assets/avatar-amyrobson.webp';
import AvatarMaxImg from '../../assets/avatar-maxblagun.webp';
import AvatarJuliosImg from '../../assets/avatar-juliusomo.webp';

export function PrincipalComment() {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: {
                avatar: AvatarAmyImg,
                name: 'amyrobson'
            },
            time: new Date('2022-08-17 22:02:00'),
            content: 'Impressive! Though it seems the drag feature could be improved. But overrall it looks increadible. You have nailed the design and the responsiveness at various breakpoints works really well.',
            isAuthor: false
        },
        {
            id: 2,
            author: {
                avatar: AvatarMaxImg,
                name: 'maxblagun'
            },
            time: new Date('2022-09-03 23:00:00'),
            content: 'Whoa, your project looks awesome! How long have you been coding for? I am still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
            isAuthor: false
        }
    ]);
    
    const [newCommentText, setNewCommentText] = useState('');

    function newCommentChange(commentText: string) {
        setNewCommentText(commentText);
    }

    function createNewComment() {
        setComments([
            ...comments,
            {
                id: 3,
                author: {
                    avatar: AvatarJuliosImg,
                    name: 'juliusomo'
                },
                time: new Date(),
                content: newCommentText,
                isAuthor: true
            }
        ]);
        setNewCommentText('');
    }

    function deleteComment() {
        console.log('deletar')
        //comparar o array de comentários para poder excluir
    }

    return (
        <>
            {comments.map(comment => {
                return (
                    <Comment
                        key={comment.id}
                        author={comment.author}
                        time={comment.time}
                        content={comment.content}
                        isAuthor={comment.isAuthor}
                        onDeleteComment={deleteComment}
                    />
                )
            })}

            <CommentBar 
                onNewCommentChange={newCommentChange}
                onCreateNewComment={createNewComment}
                inputValue={newCommentText}
            />

        </>
    );
}