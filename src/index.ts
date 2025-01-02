import server from './server/Server';
import {config} from "dotenv";

config();

const port = process.env.PORT || 3333

server.listen(port,()=>{
    console.log(`"servidor rodando na porta ${port}...`);
});