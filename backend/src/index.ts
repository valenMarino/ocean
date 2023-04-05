import express, { Request, Response } from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3001
const allowedOrigins = ['http://localhost:80', 'http://localhost', 'http://frontend:80'];
const app = express()
const options: cors.CorsOptions = {
    origin: allowedOrigins
  }; 

app.use(cors(options))
app.get('/', (req: Request, res: Response) => {

    let oceans = [
        {
            Name:"Indian Ocean"
        },
        {
            Name:"Atlantic Ocean"
        }
    ]
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(oceans, null, 3));
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})