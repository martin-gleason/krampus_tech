import express from 'express'

const app = express();
const PORT = 3000;


//Middleware
app.use(express.urlencoded({extended: true}));

//static file server
app.use('/public', express.static('public'));

//form

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '.'});
});

app.post('/ask', (req, res) => {
    const question = req.body.question;
    console.log('Question received:', question);
    res.send(`You asked: ${question}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:{PORT}`);
});