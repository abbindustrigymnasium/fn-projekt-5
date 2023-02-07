const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
require('dotenv').config()

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 5000;

app.set('prisma', prisma);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const server = app.listen(process.env.PORT, () => {
    console.log(`[Server] Listening on http://localhost:${port}`);
});

console.log("[Server] Loading routes:");
require("./setup/loader").load(app);

async function close() {
    await prisma.$disconnect();
	server.close();
    process.exit(0);
}

process.on("uncaughtException", (error : any) => {
	console.log("[PROCESS] An error occured:")
	console.error(error);
});

process.on("exit", () => close());
process.on("SIGTERM", () => close());
process.on("SIGINT", () => close());
process.on("SIGHUP", () => close());
process.on("SIGUSR2", () => close());
process.on("beforeExit", () => close())
