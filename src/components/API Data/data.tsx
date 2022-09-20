export const inicialComments = async () => {
    return [
        {
            id: 1,
            content: 'FIRST COMMENT. Impressive! Though it seems the drag feature could be improved. But overrall it looks increadible. You have nailed the design and the responsiveness at various breakpoints works really well.',
            userName: 'amyrobson',
            userAvatar: 'https://raw.githubusercontent.com/YasminGonc/comments-section/main/src/assets/avatar-amyrobson.webp',
            userId: 1,
            parentId: null,
            createdAt: new Date('2022-08-17 22:02:00')
        },
        {
            id: 2,
            content: 'SECOND COMMENT. Whoa, your project looks awesome! How long have you been coding for? I am still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
            userName: 'maxblagun',
            userAvatar: 'https://raw.githubusercontent.com/YasminGonc/comments-section/main/src/assets/avatar-maxblagun.webp',
            userId: 2,
            parentId: null,
            createdAt: new Date('2022-09-03 23:00:00')
        },
        {
            id: 3,
            content: 'FIRST COMMENT SECOND CHILD. If you are still new, I would recommend focusing on the fundamental of HTML, CSS e JS before considering React. It is very tempting to jump ahead but lay a solid foundation first.',
            userName: 'ramsesmiron',
            userAvatar: 'https://raw.githubusercontent.com/YasminGonc/comments-section/main/src/assets/avatar-ramsesmiron.webp',
            userId: 3,
            parentId: 2,
            createdAt: new Date('2022-09-10 22:02:00')
        },
        {
            id: 4,
            content: 'SECOND COMMENT SECOND CHILD. I could not agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
            userName: 'juliusomo',
            userAvatar: 'https://raw.githubusercontent.com/YasminGonc/comments-section/main/src/assets/avatar-juliusomo.webp',
            userId: 4,
            parentId: 2,
            createdAt: new Date('2022-09-15 22:02:00')
        }
    ]
}