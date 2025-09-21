const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'function.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    res.send(html);
});

app.post('/trigger-autoclick', (req, res) => {
    res.json({ 
        success: false, 
        error: 'Puppeteer cannot run on Vercel. Run locally: node autoclick.js' 
    });
});

module.exports = app;