require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_admin_key_123';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// In-memory storage for chats
const chatHistory = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- CHAT ENDPOINT ---
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "z-ai/glm-4.5-air:free",
                messages: [
                    { 
                        role: "system", 
                        content: "You are a smart Hinglish AI assistant. Keep answers short, clear and helpful." 
                    },
                    { 
                        role: "user", 
                        content: userMessage 
                    }
                ]
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || 'Failed to fetch from OpenRouter');
        }

        const aiMessage = data.choices[0].message.content;

        // Store in memory
        chatHistory.push({
            user: userMessage,
            ai: aiMessage,
            timestamp: new Date().toISOString()
        });

        res.json({ reply: aiMessage });

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "Oops! Kuch galat ho gaya. Please try again." });
    }
});

// --- ADMIN LOGIN ENDPOINT ---
app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'bindhanibikash71@gmail.com' && password === '757018') {
        const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
});

// --- ADMIN MIDDLEWARE ---
const verifyAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(403).json({ error: 'No token provided' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Unauthorized' });
        next();
    });
};

// --- GET CHATS ENDPOINT (PROTECTED) ---
app.get('/admin/chats', verifyAdmin, (req, res) => {
    res.json(chatHistory);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
