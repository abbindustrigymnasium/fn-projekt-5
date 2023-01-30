import { Request, Response } from "express";

module.exports = {
    subpath: 'list',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const users = await prisma.user.findMany()
        response.json(users);
    }
}
