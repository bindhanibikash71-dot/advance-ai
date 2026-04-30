<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hinglish AI Assistant</title>
    <style>
        :root {
            --bg-color: #121212;
            --chat-bg: #1e1e1e;
            --user-msg: #0b93f6;
            --ai-msg: #333333;
            --text-color: #ffffff;
            --input-bg: #2a2a2a;
        }
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .chat-container {
            width: 100%;
            max-width: 500px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: var(--chat-bg);
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
        }
        .header {
            padding: 15px;
            background-color: #1a1a1a;
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
            border-bottom: 1px solid #333;
        }
        .messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .message {
            max-width: 80%;
            padding: 12px 16px;
            border-radius: 20px;
            line-height: 1.4;
            word-wrap: break-word;
        }
        .message.user {
            background-color: var(--user-msg);
            align-self: flex-end;
            border-bottom-right-radius: 5px;
        }
        .message.ai {
            background-color: var(--ai-msg);
            align-self: flex-start;
            border-bottom-left-radius: 5px;
        }
        .typing {
            font-style: italic;
            color: #aaa;
            font-size: 0.9rem;
            align-self: flex-start;
            margin-left: 10px;
            display: none;
        }
        .input-area {
            padding: 15px;
            background-color: #1a1a1a;
            display: flex;
            gap: 10px;
            border-top: 1px solid #333;
        }
        input[type="text"] {
            flex: 1;
            padding: 12px;
            border-radius: 25px;
            border: none;
            background-color: var(--input-bg);
            color: white;
            outline: none;
            font-size: 1rem;
        }
        button {
            padding: 10px 20px;
            border-radius: 25px;
            border: none;
            background-color: var(--user-msg);
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;
        }
        button:disabled {
            background-color: #555;
            cursor: not-allowed;
        }
        /* Mobile height fix */
        @media (max-width: 500px) {
            .chat-container { height: 100dvh; }
        }
    </style>
</head>
<body>

<div class="chat-container">
    <div class="header">Hinglish AI</div>
    <div class="messages" id="chatBox">
        <div class="message ai">Hi! Main aapka Hinglish assistant hu. Kaise help karu?</div>
    </div>
    <div class="typing" id="typingIndicator">AI is typing...</div>
    <div class="input-area">
        <input type="text" id="userInput" placeholder="Type a message..." autocomplete="off">
        <button id="sendBtn">Send</button>
    </div>
</div>

<script>
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const typingIndicator = document.getElementById('typingIndicator');

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.textContent = text;
        chatBox.appendChild(msgDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // UI Updates
        appendMessage(message, 'user');
        userInput.value = '';
        sendBtn.disabled = true;
        typingIndicator.style.display = 'block';
        scrollToBottom();

        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });

            const data = await response.json();
            
            if (!response.ok) throw new Error(data.error);
            
            appendMessage(data.reply, 'ai');
        } catch (error) {
            appendMessage("Error: " + error.message, 'ai');
        } finally {
            sendBtn.disabled = false;
            typingIndicator.style.display = 'none';
            userInput.focus();
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
</script>
</body>
</html>
