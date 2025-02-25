import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/jokes', (req, res) => {
    res.send('Server is ready')
})


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    
})