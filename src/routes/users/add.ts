import { Request, Response } from "express";

module.exports = {
    subpath: '',
    method: 'post',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;
        try {
            const user = await prisma.user.create({
                data: query
            })
            response.status(201).send();
        } catch(PrismaClientKnownRequestError) {
            response.status(406).send("User with that name or email already exists");
        }
    }
}
