import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A jokes A",
            content: "This is content A"
        },
        {
            id: 2,
            title: "A jokes B",
            content: "This is content B"
        },
        {
            id: 3,
            title: "A jokes C",
            content: "This is content C"
        },
    ];
    res.send(jokes)
})


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    
})