import express from "express"
import {config} from "dotenv";

config();

import "./shared/services/TranslationsYup"

import {router} from "./routes";

const server = express();
 
server.use(express.json())

server.use(router);

export default server;