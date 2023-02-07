import { Request, Response } from "express";
import { Prisma } from "@prisma/client"

module.exports = {
    subpath: '',
    method: 'post',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;
        try {
            const user = await prisma.user.create({
                data: {
                    username : query.username,
                    email : query.email,
                    password_hash : "3i2e32nd90",
                    profile_image : "fakefake",
                }
            })
            response.status(201).send();
        } catch(err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError)
                response.status(406).send("User with that name or email already exists");

            throw err;
        }
    }
}
