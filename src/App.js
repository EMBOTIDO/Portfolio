import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);

  // Project links - Update these with your actual project URLs
  const projectLinks = {
    libraryManagement: 'https://www.figma.com/design/ZnpVmOkeHk7Vl8eFV98OXX/Bus-Reservation-Prototype--Community-?node-id=0-1&t=ici1syHzXwCBcokR-1', // Bus Reservation Figma Prototype
    constructionEcommerce: 'https://www.figma.com/design/ijGuHOoDW233IwAf5z0Vug/PM---PROTOTYPE?node-id=0-1&t=DKRSOqTTlTdJsCC6-1', // Construction Material E-commerce Figma Prototype
    ads2go: 'https://ads2go.site/' // ADS2GO project URL
  };

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    setFormStatus('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    
    // Clear the message after 5 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      {/* Header / Navbar */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <nav>
          <h1 className="logo" onClick={() => scrollToSection('hero')}>Nico Faith</h1>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Nico Faith Enriquez</span>
            </h2>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
            </div>
            <div className="hero-contact-bar">
              <div className="contact-bar-item">
                <span className="contact-bar-icon">📧</span>
                <a href="mailto:irishlince03@gmail.com">irishlince03@gmail.com</a>
              </div>
              <div className="contact-bar-item">
                <span className="contact-bar-icon">📱</span>
                <a href="tel:+639394123330">+63 939 412 3330</a>
              </div>
              <div className="contact-bar-item">
                <span className="contact-bar-icon">📍</span>
                <span>Pasay City, Metro Manila, Philippines</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img 
                src={process.env.PUBLIC_URL + "/profile.jpg"} 
                alt="Nico Faith Enriquez" 
                className="profile-image"
                style={{
                  objectPosition: 'center 10%' // Adjust: 'center top', 'center center', 'center 20%', '50% 30%', etc.
                  // First value: horizontal (left/center/right or %)
                  // Second value: vertical (top/center/bottom or %)
                  // Examples:
                  // 'center top' - shows top of image
                  // 'center center' - centers the image
                  // 'center 30%' - shows 30% from top (good for headshots)
                  // '50% 25%' - custom positioning
                }}
                onError={(e) => {
                  // Fallback if image doesn't exist - add your photo to public/profile.jpg
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{ display: 'none' }}>
                <span>Add your photo</span>
                <span style={{ fontSize: '3rem' }}>📷</span>
                <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>Place profile.jpg in /public folder</span>
              </div>
              <div className="profile-border"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a 4th-year BSIT student at Centro Escolar University Makati. I enjoy building websites, 
                troubleshooting hardware, ensuring quality through testing, and analyzing data to make better decisions.
              </p>
              <p>
                My passion for technology drives me to continuously learn and adapt to new challenges. 
                Whether it's creating responsive web applications, ensuring software quality, or solving 
                complex hardware issues, I approach each project with enthusiasm and attention to detail.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>4th Year</h3>
                <p>BSIT Student</p>
              </div>
              <div className="stat">
                <h3>Multiple</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>Passionate</h3>
                <p>About Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-wrapper">
            {/* Hard Skills */}
            <div className="skills-category">
              <h3 className="skills-category-title">
                <span className="category-icon">{"</>"}</span>
                HARD SKILLS
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-icon skill-icon-small">HTML</span>
                  <span className="skill-label">HTML</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon skill-icon-small">CSS</span>
                  <span className="skill-label">CSS</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">JS</span>
                  <span className="skill-label">JavaScript</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">⚛️</span>
                  <span className="skill-label">React.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">▲</span>
                  <span className="skill-label">Next.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🍃</span>
                  <span className="skill-label">MongoDB</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🗄️</span>
                  <span className="skill-label">MySQL</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🟢</span>
                  <span className="skill-label">Node.js</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="skills-category">
              <h3 className="skills-category-title">
                <span className="category-icon">👥</span>
                SOFT SKILLS
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-icon">🧠</span>
                  <span className="skill-label">Critical Thinking And Analysis</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🔧</span>
                  <span className="skill-label">Problem Solving Troubleshooting</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🔄</span>
                  <span className="skill-label">Adaptability</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">👂</span>
                  <span className="skill-label">Active Listening</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🤝</span>
                  <span className="skill-label">Ability to work in a team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            {/* Project 1: Library Management System */}
            <div className={`project-card ${expandedProject === 'library' ? 'expanded' : ''}`}>
              <div 
                className="project-header" 
                onClick={() => toggleProject('library')}
              >
                <div className="project-header-content">
                  <h3>Library Management System</h3>
                </div>
                <span className={`project-toggle ${expandedProject === 'library' ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>
              <div className={`project-details ${expandedProject === 'library' ? 'expanded' : ''}`}>
                <p className="project-description">
                A Library Management System is a digital solution designed to streamline the management of libraries, making it easier to organize, track, and access books and other resources. It allows librarians to catalog books, manage member accounts, handle check-ins and check-outs and track overdue items. For users, it provides a simple way to search for available materials and reserve books. The Library Management System  enhances library operations, improves resource accessibility, and delivers a seamless experience for both staff and readers.                </p>
                <div className="project-role">
                  <strong>Role:</strong> Frontend Developer
                </div>
                <div className="project-tech">
                  <span>JavaScript</span>
                </div>
                <div className="project-links">
                  {projectLinks.libraryManagement ? (
                    <a 
                      href={projectLinks.libraryManagement} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project →
                    </a>
                  ) : (
                    <span className="project-link-placeholder">Add project URL in App.js</span>
                  )}
                </div>
              </div>
            </div>

            {/* Project 2: Construction Material E-commerce Platform */}
            <div className={`project-card ${expandedProject === 'construction' ? 'expanded' : ''}`}>
              <div 
                className="project-header" 
                onClick={() => toggleProject('construction')}
              >
                <div className="project-header-content">
                  <h3>Construction Material E-commerce Platform</h3>
                </div>
                <span className={`project-toggle ${expandedProject === 'construction' ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>
              <div className={`project-details ${expandedProject === 'construction' ? 'expanded' : ''}`}>
                <p className="project-description">
                This platform is an online marketplace for construction materials, connecting suppliers, contractors, and individual buyers in one convenient digital space. Users can browse and purchase a wide range of products from cement, steel, and lumber to finishing materials directly from the construction company. The platform offers real-time inventory updates and payment options streamlining the procurement process for construction projects. Designed to save time and reduce costs, it makes sourcing materials simpler, faster, and more reliable.                </p>
                <div className="project-role">
                  <strong>Role:</strong> QA, UI/UX, Frontend Developer
                </div>
                <div className="project-tech">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Figma</span>
                </div>
                <div className="project-links">
                  {projectLinks.constructionEcommerce ? (
                    <a 
                      href={projectLinks.constructionEcommerce} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project →
                    </a>
                  ) : (
                    <span className="project-link-placeholder">Add project URL in App.js</span>
                  )}
                </div>
              </div>
            </div>

            {/* Project 3: ADS2GO */}
            <div className={`project-card ${expandedProject === 'ads2go' ? 'expanded' : ''}`}>
              <div 
                className="project-header" 
                onClick={() => toggleProject('ads2go')}
              >
                <div className="project-header-content">
                  <h3>ADS2GO</h3>
                </div>
                <span className={`project-toggle ${expandedProject === 'ads2go' ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>
              <div className={`project-details ${expandedProject === 'ads2go' ? 'expanded' : ''}`}>
                <p className="project-description">
                Ads2Go is a dynamic mobile advertising platform that connects businesses with targeted audiences through real-time, location-based campaigns. It allows brands to deploy ads on vehicles, screens, and digital networks, ensuring maximum visibility and engagement. With user-friendly dashboards, clients can track campaign performance, monitor reach, and optimize advertising strategies seamlessly. Designed for efficiency and scalability, Ads2Go transforms the way businesses advertise on the go, delivering measurable results with every campaign.                </p>
                <div className="project-role">
                  <strong>Role:</strong> QA, UI/UX, Fullstack Developer
                </div>
                <div className="project-tech">
                  <span>React.js</span>
                  <span>React Expo</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Figma</span>
                </div>
                <div className="project-links">
                  {projectLinks.ads2go ? (
                    <a 
                      href={projectLinks.ads2go} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project →
                    </a>
                  ) : (
                    <span className="project-link-placeholder">Add project URL in App.js</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus && (
                <div className="form-status success">
                  {formStatus}
                </div>
              )}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Nico Faith Enriquez. All rights reserved.</p>
          <div className="footer-links">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
