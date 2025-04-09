import express from 'express';
const app = express();
import dotenv from "dotenv"
dotenv.config()

app.use(express.static('dist'));
// app.get('/', (req, res) => {
//     res.send("Server is ready");
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, desc: "Why do programmers prefer dark mode? Because light attracts bugs!" },
        { id: 2, desc: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings." },
        { id: 3, desc: "How do you comfort a JavaScript bug? You console it." },
        { id: 4, desc: "Why did the developer go broke? Because he used up all his cache." },
        { id: 5, desc: "What's a programmer’s favorite hangout place? The Foo Bar." }
    ]
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
    
});
