import { Request, Response } from "express";

module.exports = {
    subpath: 'create', // temp
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        // const query = request.query;

        const newPost = await prisma.post.create({ // Hård kodad
            data: {
                title : "Test Text",
                topic : "testing",
                content : "This is the content of the post. This is the content of the post. This is the content of the post. ",
                score : 0,
                author: {
                    connect : {id : 1}
                }
                //author_id : 0,
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