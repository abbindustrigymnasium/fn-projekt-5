import { Request, Response } from "express";
import { send } from "process";

module.exports = {
    subpath: '',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;
        // console.log(query);
        // response.send(parseInt(query))
        const posts = await prisma.post.findMany({
            where :{
                post_id : parseInt(query.key as string)
            }
        })
        const comments = await prisma.post.findMany({
            where :{
                post_id : parseInt(query.key as string)
            }
        })


        response.status(200).json(posts)
    }
}