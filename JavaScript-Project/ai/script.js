const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Predefined question & answer pairs
const qaList = {
  "hi": "Hello! How can I help you?",
  "hello": "Hi there! What do you want to ask?",
  "how are you": "I’m a bot, I’m always good 😄",
  "what is your name": "I am ChatBot 3000",
  "what is javascript": "JavaScript is a programming language used to make websites interactive.",
  "what is html": "HTML stands for HyperText Markup Language, used for web page structure.",
  "what is css": "CSS is used to style HTML elements on web pages.",
  "bye": "Goodbye! Have a nice day!"
};

sendBtn.addEventListener('click', handleMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === "Enter") handleMessage();
});

function handleMessage() {
  const userMsg = userInput.value.trim().toLowerCase();
  if (!userMsg) return;

  addMessage(userMsg, 'user');

  // Bot response
  let botMsg = "Sorry, I don't understand that.";
  for (const q in qaList) {
    if (userMsg.includes(q)) {
      botMsg = qaList[q];
      break;
    }
  }

  addMessage(botMsg, 'bot');
  userInput.value = '';
}

function addMessage(msg, sender) {
  const p = document.createElement('p');
  p.textContent = msg;
  p.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}
