import { Request, Response } from "express";
import { Prisma } from '@prisma/client'

module.exports = {
    subpath: '',
    method: 'post',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const body = request.body;
        try {
            const user = await prisma.user.create({
                data: {
                    username : body.username,
                    email : body.email,
                    password_hash : body.password,
                    profile_image : "",
            }
            })
            response.status(201).send();
        } catch(err /* PrismaClientKnownRequestError */) {
            if (err instanceof Prisma.PrismaClientKnownRequestError)
                response.status(406).send("User with that name or email already exists")
            throw err;
        }
    }
}
