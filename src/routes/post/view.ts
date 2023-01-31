import { Request, Response } from "express";

module.exports = {
    subpath: '',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;
        // const users = await prisma.user.findMany()

        // response.json(users)
        // response.status(201).send(`Query: ${query}`)
    }
}