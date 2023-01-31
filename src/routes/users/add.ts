import { Request, Response } from "express";

module.exports = {
    subpath: 'add',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;

        try {
            const user = await prisma.user.create({
                data: query
            })
            console.log(`[Server] Added user '${query.username}'`);
            console.log(user);
            response.send("aaa");
        } catch(PrismaClientKnownRequestError) {
            console.log("[Server] User already exists");
            response.status(401).send('user already yup');
        }
    }
}
