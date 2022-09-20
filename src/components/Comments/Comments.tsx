import styles from './Comments.module.css';

import { useEffect, useState } from "react";

import { inicialComments } from '../API Data/data';
import { CommentN } from '../comment/CommentN';
import { CommentBarN } from '../commentBar/CommentBarN';

interface Comments {
    id: number;
    content: string;
    userName: string;
    userAvatar: string;
    userId: number;
    parentId: number | null;
    createdAt: Date;
}

interface CommentsProps {
    currentUserId: number;
}

export function Comments( {currentUserId}: CommentsProps ) {
    const [backendComments, setBackendComments] = useState<Comments[]>([]);

    const [newCommentText, setNewCommentText] = useState('');

    useEffect(() => {
        inicialComments().then((data) => {
            setBackendComments(data);
        })
    }, []);

    const principalComments = backendComments.filter((comment) => comment.parentId === null); //filtro com os comentários principais

    function getReplais(commentId: Comments['id']) {
        return backendComments.filter((backendComment) => backendComment.parentId === commentId)
    }

    function newComment() {
        setBackendComments([...backendComments, 
        {
            id: Math.random(),
            content: newCommentText,
            userName: 'juliusomo',
            userAvatar: 'https://raw.githubusercontent.com/YasminGonc/comments-section/main/src/assets/avatar-juliusomo.webp',
            userId: currentUserId,
            parentId: null,
            createdAt: new Date(),
        }])
        setNewCommentText('');
    }

    function newCommentChange(text: string, parentId?: number | null) {
        setNewCommentText(text);
    }

    function deleteComment(commentId: number) {
        const updateBackendComments = backendComments.filter((backendComment) => backendComment.id != commentId);

        setBackendComments(updateBackendComments);
    }


    return (
        <>
            <div>
                {principalComments.map((principalComment) => {
                    return(
                        <div key={principalComment.id}>
                            <CommentN 
                                comment={principalComment} 
                                onGetReplais={getReplais}
                                currentUserId={currentUserId}
                                onDeleteComment={deleteComment}
                            />
                        </div>

                    )
                })}
            </div>

            <div>
                <CommentBarN
                    onNewComment={newComment}
                    onNewCommentChange={newCommentChange}
                    inputValue={newCommentText} 
                />
            </div>
        
        </>
    );
}
