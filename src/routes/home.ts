import { Request, Response } from "express";

module.exports = {
    subpath: '',
    method: 'get',
    run: function(request: Request, response: Response) {
        response.status(201).send();
    }
}
