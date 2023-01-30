import { Request, Response } from "express";

module.exports = {
    subpath: 'delete',
    method: 'get',
    run: async function(request: Request, response: Response) {
        let prisma = request.app.get("prisma");
        const query = request.query;
        await prisma.user.delete({
            where: query
        });
        response.send(`Sucessfully deleted user`);
    }
}
