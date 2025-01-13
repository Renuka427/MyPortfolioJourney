document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});
document.getElementById('getToKnowMeBtn').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('mouseover', (e) => {
  const cursor = document.getElementById('cursor');
  if (e.target.classList.contains('cta') || e.target.classList.contains('project-card')) {
    cursor.classList.add('hover');
  } else {
    cursor.classList.remove('hover');
  }
});
let text = 'Welcome to My Portfolio,I am R. Renuka';
let index = -1;
const titleElement = document.getElementById('hero-title');

function typeWriter() {
  if (index < text.length) {
    titleElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chatbot-messages');

chatSend.addEventListener('click', () => {
  const userMessage = chatInput.value;
  if (userMessage.trim()) {
    const userMessageElement = document.createElement('p');
    userMessageElement.textContent = `You: ${userMessage}`;
    chatMessages.appendChild(userMessageElement);

    const botMessage = document.createElement('p');
    botMessage.textContent = `Bot: I’m an AI Assistant. How can I assist you further?`;
    chatMessages.appendChild(botMessage);
  }
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#e74c3c"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 3
    }
  }
});
function submitForm(event) {
  event.preventDefault();
  
  const form = document.getElementById("contact-form");
  const successMessageCard = document.getElementById("success-message");

  form.style.display = "none";

  successMessageCard.classList.remove("hidden");

  setTimeout(() => {
    successMessageCard.classList.add("hidden"); 
    form.style.display = "block"; 
  }, 5000);
}
