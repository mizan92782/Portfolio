// Project data
const projects = {
  'ecommerce': {
    tag: 'Backend',
    title: 'Django E-Commerce Platform',
    subtitle: 'A full-featured e-commerce solution built with Django',
    overview: 'A scalable e-commerce platform built with Django, featuring a complete shopping experience with product management, shopping cart, secure payment integration, and an admin dashboard for managing orders and inventory.',
    features: [
      'User authentication and authorization system',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment gateway integration (Stripe/PayPal)',
      'Order management and tracking',
      'Admin dashboard for inventory management',
      'RESTful API for mobile integration',
      'Email notifications for orders'
    ],
    tech: ['Django', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'REST Framework', 'Bootstrap'],
    github: 'https://github.com/yourusername/project1',
    demo: '#'
  },
  'flutter-app': {
    tag: 'Mobile',
    title: 'Flutter Mobile App',
    subtitle: 'Cross-platform mobile application with real-time features',
    overview: 'A modern cross-platform mobile application built with Flutter, featuring real-time data synchronization, offline support, and a beautiful user interface. The app provides seamless experience across iOS and Android devices.',
    features: [
      'Cross-platform compatibility (iOS & Android)',
      'Real-time data synchronization',
      'Offline mode with local storage',
      'Push notifications',
      'User authentication with Firebase',
      'Beautiful and responsive UI',
      'State management with Provider',
      'Cloud storage integration'
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'SQLite', 'REST API'],
    github: 'https://github.com/yourusername/project2',
    demo: '#'
  },
  'rest-api': {
    tag: 'API',
    title: 'REST API Service',
    subtitle: 'High-performance RESTful API with advanced features',
    overview: 'A robust and scalable REST API service built with Django REST Framework, featuring JWT authentication, rate limiting, comprehensive documentation, and optimized for high performance with caching strategies.',
    features: [
      'JWT token-based authentication',
      'Role-based access control (RBAC)',
      'Rate limiting and throttling',
      'API versioning',
      'Comprehensive API documentation (Swagger)',
      'Redis caching for performance',
      'Automated testing suite',
      'Docker containerization'
    ],
    tech: ['Python', 'Django REST', 'Redis', 'PostgreSQL', 'Docker', 'JWT', 'Swagger'],
    github: 'https://github.com/yourusername/project3',
    demo: '#'
  }
};

// Get project ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('project') || 'ecommerce';

// Load project data
const project = projects[projectId];

if (project) {
  document.getElementById('projectTag').textContent = project.tag;
  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectSubtitle').textContent = project.subtitle;
  document.getElementById('projectOverview').textContent = project.overview;

  // Load features
  const featuresList = document.getElementById('projectFeatures');
  featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');

  // Load tech stack
  const techStack = document.getElementById('projectTech');
  techStack.innerHTML = project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('');

  // Update links
  document.querySelector('.project-links .btn-primary').href = project.github;
  document.querySelector('.project-links .btn-secondary').href = project.demo;
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
