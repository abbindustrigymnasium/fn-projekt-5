import { Request, Response } from "express";

module.exports = {
    subpath: '',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;
        try {
            console.log(query)
            const user = await prisma.user.create({
                data: {
                    username : "Theodor",
                    email : "the.bes@gmail.com",
                    password_hash : "3i2e32nd90",
                    profile_image : "fakefake",
                }
                // data: query
            })
            response.status(201).send();
        } catch(PrismaClientKnownRequestError) {
            response.status(406).send("User with that name or email already exists");
        }
    }
}
