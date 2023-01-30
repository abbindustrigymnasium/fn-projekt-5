import { Request, Response } from "express";

module.exports = {
    subpath: '',
    method: 'get',
    run: function(request: Request, response: Response) {
        console.log("good job");
        response.send("nothing here");
    }
}
