import { Request, Response } from "express";

module.exports = {
    subpath: '',
    method: 'post',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        // const query = request.query;

        try {
            const newPost = await prisma.post.create({ // Hård kodad
                data: {
                    title : "Test Text",
                    topic : "testing",
                    content : "This is the content of the post. This is the content of the post. This is the content of the post. ",
                    score : 0,
                    user_id : 0,
                }
            })
            response.status(201).send("Post posted!");
        } catch(PrismaClientKnownRequestError) {
            response.status(401).send('Post Failed!');
        }

        
    }
}