import { NextFunction, Request, Response } from "express";
import { Prisma } from '@prisma/client'

module.exports = {
    subpath: '',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;
        const users = await prisma.user.findMany({where: query})

        if (users.length == 0)
            response.status(406).send("User not found");
        response.status(200).json(users);
    }
}
