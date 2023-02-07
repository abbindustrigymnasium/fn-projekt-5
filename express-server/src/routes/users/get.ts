import { NextFunction, Request, Response } from "express";

module.exports = {
    subpath: '',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;

        const users = await prisma.user.findMany({where: query})
        
        response.status(200).json(users);
    }
}
