const fs = require('fs');
const { Router } = require('express');

interface Route {
    subpath: string;
    method: string;
    run: Function;
};

function load_route_file(app: any, path: String, file: String) {
    const folder_router = Router();
    if (fs.lstatSync(`./src/routes${path}${file}`).isDirectory()) {
        load_routes(app, `${path}${file}/`);
    } else {
        const event: Route = require(`../routes${path}${file}`);
        const name = file.split('.')[0];
        if (typeof event.run !== 'function' || typeof event.method !== 'string' || typeof event.subpath !== 'string') {
            console.log(`\t${name}: ERROR Incorrect file format`);
            return;
        }
        folder_router[event.method](`/${event.subpath}`, event.run.bind(null));
        console.log(`\t${name}: ${path}${event.subpath}`);
    }
    app.use(path, folder_router);
}

function load_routes(app: any, path = '/') {
    fs.readdirSync(`./src/routes${path}`)
        .forEach((file: String) => load_route_file(app, path, file));
}

function load(app: any) {
    app.setMaxListeners(10);
    load_routes(app);
} 

export { load }
