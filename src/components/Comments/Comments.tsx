import styles from './Comments.module.css';

import { useEffect, useState } from "react";

import { inicialComments } from '../API Data/data';
import { CommentN } from '../comment/CommentN';

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

    useEffect(() => {
        inicialComments().then((data) => {
            setBackendComments(data);
        })
    }, []);

    const principalComments = backendComments.filter((comment) => comment.parentId === null); //filtro com os comentários principais

    function getReplais(commentId: Comments['id']) {
        return backendComments.filter((backendComment) => backendComment.parentId === commentId)
    }

    /*const getReplais = (commentId: Comments['id'])  => {
        return backendComments.filter((backendComment) => backendComment.parentId === commentId)
    }*/

    return (
        <div>
            {principalComments.map((principalComment) => {
                return(
                    <div key={principalComment.id}>
                        <CommentN comment={principalComment} onGetReplais={getReplais}/>
                    </div>

                )
            })}

            
        </div>
    );
}

//retornar apenas os comentários principais