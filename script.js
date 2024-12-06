// Script for scroll-based animations
const fadeInElements = document.querySelectorAll('.fade-in');

const isInView = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

const handleScroll = () => {
  fadeInElements.forEach((el) => {
    if (isInView(el)) {
      el.classList.add('fade-in-visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Check visibility on initial load

// Custom Cursor Effect
const cursor = document.createElement('div');
cursor.style.position = 'absolute';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = '#ff00f7';
cursor.style.pointerEvents = 'none';
cursor.style.transition = 'transform 0.1s ease-out';

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';
});

// Add interactive hover effect to the CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', () => {
  cursor.style.transform = 'scale(1.5)';
});

ctaButton.addEventListener('mouseleave', () => {
  cursor.style.transform = 'scale(1)';
});

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar ul li a');

const highlightNavbar = () => {
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Adjust for offset
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navbarLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightNavbar);
highlightNavbar(); // Check on initial load

const cursorTrail = [];

for (let i = 0; i < 10; i++) {
  const trail = document.createElement('div');
  trail.style.position = 'absolute';
  trail.style.width = '10px';
  trail.style.height = '10px';
  trail.style.borderRadius = '50%';
  trail.style.backgroundColor = 'rgba(255, 0, 247, 0.2)';
  trail.style.pointerEvents = 'none';
  trail.style.transition = 'transform 0.2s ease-out';
  document.body.appendChild(trail);
  cursorTrail.push(trail);
}

document.addEventListener('mousemove', (e) => {
  cursorTrail.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = e.pageX - trail.offsetWidth / 2 + 'px';
      trail.style.top = e.pageY - trail.offsetHeight / 2 + 'px';
    }, index * 20); // Delay each trail segment
  });
});

document.querySelectorAll('.navbar a').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  const aboutSection = document.querySelector('#about');

const observeAboutSection = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  },
  { threshold: 0.3 }
);

observeAboutSection.observe(aboutSection);

// Hover effect with skill highlight
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    const skillName = card.dataset.skill;
    card.style.transform = 'scale(1.15)';
    card.style.boxShadow = '0 0 40px rgba(255, 0, 255, 1)';
    document.querySelector('.skills-intro').textContent = `Mastering the art of ${skillName}`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.5)';
    document.querySelector('.skills-intro').textContent = 'Here are the technical and creative skills that I have mastered over the years:';
  });
});

// Function to display project details dynamically
function showProjectDetails(projectName) {
  const projects = {
    "Futuristic Dashboard": "This project involves a highly customizable dashboard featuring charts, analytics, and live data updates, optimized for performance.",
    "AI Chat Assistant": "A robust chatbot leveraging natural language processing for intelligent conversations, ideal for customer service.",
    "Immersive Portfolio": "A portfolio website with 3D animations, dynamic content, and responsive design for showcasing personal achievements.",
  };

  const projectDescription = projects[projectName];
  alert(`Project: ${projectName}\n\nDetails: ${projectDescription}`);
}

// Testimonial Cards Animation on Scroll
const testimonialCards = document.querySelectorAll('.testimonial-card');

const animateTestimonials = () => {
  testimonialCards.forEach((card, index) => {
    if (isInView(card)) {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add('fade-in-visible');
    }
  });
};

window.addEventListener('scroll', animateTestimonials);
animateTestimonials(); // Initial load animation

// Chatbot Functionality
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Simulate AI Responses
const botReplies = {
  "hi": "Hello! How can I assist you today?",
  "hello": "Hi there! How can I help you?",
  "how are you": "I'm doing great, thank you! How about you?",
  "what is your name": "I'm your virtual assistant. I don't have a name, but you can call me AI.",
  "default": "Sorry, I didn't quite get that. Can you try again?"
};

// Function to append messages to the chat box
const appendMessage = (message, sender) => {
  const p = document.createElement('p');
  p.classList.add(sender);
  p.textContent = message;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
};

// Handle user input
const handleUserMessage = () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage(userMessage, 'user');
    userInput.value = ''; // Clear input field
    const botResponse = botReplies[userMessage.toLowerCase()] || botReplies["default"];
    setTimeout(() => appendMessage(botResponse, 'bot'), 500); // Simulate a delay for bot response
  }
};

// Send message on button click or Enter key press
sendButton.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserMessage();
});

// Toggle the visibility of the chatbot when the chat icon is clicked
const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const sendbutton = document.getElementById('send-button');
const userinput = document.getElementById('user-input');
const chatbox = document.getElementById('chat-box');

// Open the chat container when the icon is clicked
chatIcon.addEventListener('click', () => {
  chatContainer.style.display = 'flex';  // Show the chatbot container
  chatIcon.style.display = 'none';  // Hide the icon
});

// Function to handle sending messages
sendButton.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage !== '') {
    const userMessageElement = document.createElement('p');
    userMessageElement.textContent = `You: ${userMessage}`;
    chatBox.appendChild(userMessageElement);
    userInput.value = '';  // Clear the input field
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }
});

// Optional: Handle 'Enter' key for sending message
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});

// Get elements
const chaticon = document.getElementById('chat-icon');
const chatcontainer = document.getElementById('chat-container');
const closeIcon = document.getElementById('close-icon');

// Open chat container when the chat icon is clicked
chatIcon.addEventListener('click', () => {
  chatContainer.style.display = 'flex'; // Show chat container
  chatIcon.style.display = 'none'; // Hide the chat icon when container is open
});

// Close chat container when the close icon is clicked
closeIcon.addEventListener('click', () => {
  chatContainer.style.display = 'none'; // Hide chat container
  chatIcon.style.display = 'block'; // Show the chat icon again after closing
});
