export interface Comments {
    id: number;
    content: string;
    userName: string;
    userAvatar: string;
    userId: number;
    parentId: number | null;
    createdAt: Date;
}