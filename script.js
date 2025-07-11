var introText = 'Hi There! I am Vinay Guleria, a student of BCA from Chandigarh University. I am a passionate and dedicated student with a keen interest in learning new things. I am a quick learner and I am always looking for new challenges. I am a team player and I am always looking for new opportunities to learn and grow.';
var introTitle = 'Introduction';
var educationTitle = 'Education';
var projectsTitle = 'Projects';
var speed = 50;
console.log('JS loaded!');
function typeWriter(elementId, text, index) {
    const element = document.getElementById(elementId);
    if (!element) return; // Exit if element doesn't exist
    
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(elementId, text, index), speed);
    }
}

// Function to start typewriter effects when element is in viewport
function startTypewriterWhenVisible(elementId, text) {
    const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter(elementId, text, 0);
                observer.unobserve(entry.target); // Stop observing once started
            }
        });
    }, { threshold: 0.1 }); // Start when at least 10% of the element is visible

    const element = document.getElementById(elementId);
    if (element) {
        observer.observe(element);
    }
}

// Add parallax effect to background
function handleParallax() {
    const scrolled = window.pageYOffset;
    document.body.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
}

// Add smooth scroll behavior
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add hover effect to project images
function addProjectImageEffects() {
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05) rotate(2deg)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Add typing cursor effect
function addTypingCursor() {
    const titles = ['intro-title', 'education-title', 'projects-title'];
    titles.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.animation = 'cursorBlink 1s infinite';
        }
    });
}

// Modal logic for project details
const projectData = {
  'e-mart': {
    title: 'E-Mart',
    description: 'E-Mart is a full-stack e-commerce platform built with React, TypeScript, and Firebase. It provides a seamless shopping experience for customers while offering robust management tools for vendors and administrators.',
    liveUrl: 'https://e-mart-kappa.vercel.app/',
    githubUrl: 'https://github.com/vinayguleria/e-mart',
    tech: 'React, TypeScript, Firebase, Vite, Firestore, Web Development'
  },
  'organic': {
    title: 'Organic By Pooja',
    description: 'Official Site Of Organic By Pooja. A Women Salon And Makeup Accessories.',
    liveUrl: 'https://www.organicbypooja.in/',
    githubUrl: 'https://github.com/vinayguleria/organicbypooja',
    tech: 'Firebase Authentication, Firestore Database, APIs'
  },
  'blogpost': {
    title: 'BlogPost',
    description: 'A modern, responsive blog website built with React, Material UI, and Tailwind CSS. This project allows users to browse featured posts, read blog articles, learn about the author, and connect via a contact form. The site is designed for personal blogging and storytelling, with a clean and engaging UI.',
    liveUrl: 'https://blogpostsw.netlify.app/',
    githubUrl: 'https://github.com/vinayguleria/blogpost',
    tech: 'React, Material UI, Tailwind CSS'
  },
  'chatbuddy': {
    title: 'Chat-Buddy',
    description: 'Chat Buddy is a real-time chat application that enables seamless communication between users. It supports multiple chat rooms, allowing users to join or create rooms for group conversations. The project is built using HTML, CSS, and JavaScript for the frontend, with WebSockets for real-time messaging and MongoDB as the database for storing user and message data.',
    liveUrl: 'https://charming-lamington-c1b952.netlify.app/',
    githubUrl: 'https://github.com/vinayguleria/chat-buddy',
    tech: 'HTML, CSS, JavaScript, WebSockets (SocketIO), MongoDB'
  }
};

document.addEventListener('DOMContentLoaded', function() {
    startTypewriterWhenVisible('intro-title', introTitle);
    startTypewriterWhenVisible('introduction', introText);
    startTypewriterWhenVisible('education-title', educationTitle);
    startTypewriterWhenVisible('projects-title', projectsTitle);

    window.addEventListener('scroll', handleParallax);

    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });

    addProjectImageEffects();

    addTypingCursor();

    document.querySelectorAll('.scroll-down').forEach(button => {
        button.addEventListener('click', () => {
            const nextSection = button.closest('section').nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const path = document.getElementById('navbar-curve');
    if (path) {
        const basePath = "M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,170.7C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";

        let frame = 0;
        const amplitude = 20; // increased amplitude for better visibility
        const frequency = 0.05; // increased frequency for better visibility

        function animateCurve() {
            let newPath = "M0,192";
            for (let x = 0; x <= 1380; x += 60) {
                const y = 150 + amplitude * Math.sin(frequency * frame + x * 0.05);
                newPath += `L${x},${y.toFixed(1)}`;
            }
            newPath += "L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
            path.setAttribute('d', newPath);
            frame++;
            requestAnimationFrame(animateCurve);
        }
        animateCurve();
    }

    document.querySelectorAll('[data-tooltip]').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.setAttribute('data-show', '');
        });
        item.addEventListener('mouseleave', () => {
            item.removeAttribute('data-show');
        });
    });

  // Modal logic
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalLive = document.getElementById('modal-live-url');
  const modalGit = document.getElementById('modal-github-url');
  const modalTech = document.getElementById('modal-tech');
  const closeModalBtn = document.querySelector('.close-modal');

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const key = btn.getAttribute('data-project');
      const data = projectData[key];
      if (data) {
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.description;
        modalLive.textContent = data.liveUrl;
        modalLive.href = data.liveUrl;
        modalGit.textContent = data.githubUrl;
        modalGit.href = data.githubUrl;
        modalTech.textContent = data.tech;
        modal.classList.add('show');
      }
    });
  });

  function closeModal() {
    modal.classList.remove('show');
  }

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (modal.classList.contains('show') && e.key === 'Escape') closeModal();
  });

  // Thank You Modal logic
  const thankyouModal = document.getElementById('thankyou-modal');
  const closeThankyouBtn = document.querySelector('.close-thankyou-modal');
  const contactForm = document.querySelector('.contact-content form');

  if (contactForm && thankyouModal && closeThankyouBtn) {
    contactForm.addEventListener('submit', function(e) {
      // For demo: prevent actual submission and show modal
      e.preventDefault();
      thankyouModal.classList.add('show');
      // Optionally, reset the form
      contactForm.reset();
    });
    function closeThankyouModal() {
      thankyouModal.classList.remove('show');
    }
    closeThankyouBtn.addEventListener('click', closeThankyouModal);
    thankyouModal.addEventListener('click', function(e) {
      if (e.target === thankyouModal) closeThankyouModal();
    });
    document.addEventListener('keydown', function(e) {
      if (thankyouModal.classList.contains('show') && e.key === 'Escape') closeThankyouModal();
    });
  }
});

