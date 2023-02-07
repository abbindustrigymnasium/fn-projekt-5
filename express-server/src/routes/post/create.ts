import { Request, Response } from "express";
import { Prisma } from "@prisma/client"

module.exports = {
    subpath: '', // temp
    method: 'post',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;

        try {
            const newPost = await prisma.post.create({
                data: {
                    title : "Test Text",
                    topic : "testing",
                    content : "This is the content of the post. This is the content of the post. This is the content of the post. ",
                    score : 0,
                    author: {
                        connect : {id : query.id}
                    }
                }
            })
            response.status(201).send("Post posted!");
        } catch(err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError)
                response.status(401).send('Post Failed!');

            throw err;
        }

        
    }
}
