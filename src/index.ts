import express, {Request, Response} from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', (req: Request, res: Response) => {
    const {username, password} = req.body;
    res.send('User Registered');
});

app.post('/login', (req: Request, res:Response) => {
    const {username, password} = req.body;
    res.send('User logged in');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})