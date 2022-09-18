import { useState } from 'react';
import { Comment } from '../comment/Comment';
import { CommentBar } from '../commentBar/CommentBar';

import AvatarJuliosImg from '../../assets/avatar-juliusomo.webp';
import AvatarRamImg from '../../assets/avatar-ramsesmiron.webp';

export function SubComment() {
    const [subComments, setSubComments] = useState([
        {
            id: 1,
            author: {
                avatar: AvatarRamImg,
                name: 'ramsesmiron'
            },
            time: new Date('2022-09-10 22:02:00'),
            content: 'If you are still new, I would recommend focusing on the fundamental of HTML, CSS e JS before considering React. It is very tempting to jump ahead but lay a solid foundation first.',
            isAuthor: false
        },
        {
            id: 2,
            author: {
                avatar: AvatarJuliosImg,
                name: 'juliusomo'
            },
            time: new Date('2022-09-15 22:02:00'),
            content: 'I could not agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
            isAuthor: true
        },
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    function newCommentChange(commentText: string) {
        setNewCommentText(commentText);
    }

    function createNewComment() {
        setSubComments([
            ...subComments,
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

    return (
        <>
            {subComments.map(comment => {
                return (
                    <Comment
                        key={comment.id}
                        author={comment.author}
                        time={comment.time}
                        content={comment.content}
                        isAuthor={comment.isAuthor}
                    />
                )
            })}

            {/* <CommentBar
                onNewCommentChange={newCommentChange}
                onCreateNewComment={createNewComment}
                inputValue={newCommentText}
            /> */}

        </>
    );
}