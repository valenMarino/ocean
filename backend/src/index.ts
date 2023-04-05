import express, { Request, Response } from 'express'

const PORT = process.env.PORT || 3001

const app = express()
app.get('/', (req: Request, res: Response) => {

    let oceans = [
        {
            Name:"Indian Ocean"
        },
        {
            Name:"Atlantic Ocean"
        }
    ]
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(oceans, null, 3));
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})