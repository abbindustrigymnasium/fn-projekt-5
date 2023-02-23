import { Request, Response } from "express";

module.exports = {
    subpath: 'create', // temp
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        // const query = request.query;

        const newPost = await prisma.post.create({ // Hård kodad
            data: {
                title : "Second post",
                topic : "testing",
                content : "This is a second post!!!!!!!",
                author: {
                    connect : {id : 1}
                }
            }
        })
        // const newComment = await prisma.post.create({ // Hård kodad
        //     data: {
        //         content : "This is a interesting post",
        //         // author : 
        //         pos
        //     }
        // })
        try {
            response.status(201).send("Post posted!");
        } catch(PrismaClientKnownRequestError) {
            response.status(401).send('Post Failed!');
        }

        
    }
}