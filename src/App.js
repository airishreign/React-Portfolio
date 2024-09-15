import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

const App = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar scrollToSection={scrollToSection} />
        <header id="home" className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="home-content">
            <h1>Welcome to my React Portfolio!</h1>
            <h3>Feel free to navigate through the various sections to get to know my projects, background, and how to reach out. Thank you for visiting, and enjoy exploring!</h3>
          </div>
        </header>

        {/* About Me Section */}
        <div id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="rectangle">
            <p>
            Hello! I am a passionate Bachelor of Science in Computer Science student at De La Salle Lipa. My academic journey is centered around my love for technology and innovation. My experience extends beyond the classroom and the basketball court. Whether it’s developing a web application, conducting research, or working on a team project, I am always eager to take on new challenges and learn from each experience.  Outside of academics and sports, I am an avid learner who enjoys staying up-to-date with the latest technological advancements and trends. I am also passionate about community service and actively participate in initiatives that aim to improve the lives of others.  
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <Projects />
        </div>

        {/* Contact Section */}
        <div id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="rectangle">
            <ContactForm />
          </div>
        </div>

        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const Navbar = ({ scrollToSection }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About Me</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: 'JolliBINI',
      description: 'BINI and Jollibee are running a promotion that offers great meals and exclusive benefits for the blooms.',
      link: 'https://www.jollibee.com.ph/jollibini-meals-promo/'
    },
    {
      title: 'BINI X Modess',
      description: 'BINI collab with Modess, likely focusing on empowering young women.',
      link: 'https://stylevanity.com/2023/03/modess-welcomes-bini-as-their-newest-brand-ambassadors.html'
    },
    {
      title: 'BINI X Ponds',
      description: 'BINI and Pon collaborate, emphasizing elegance and self-care.',
      link: 'https://ent.abs-cbn.com/articles-news/bini-reveals-their-2-step-skincare/ponds/advertorial-22474'
    }
  ];

  return (
    <div className="projects-container">
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

const Contact = () => <h2></h2>;

const ContactForm = () => {
  return (
    <div className="contact-form">
      <p>If you have any questions or concerns, feel free to contact me. I'm open to work opportunities!</p>
      <form>
        <div>
          <label htmlFor="name">Your Name: </label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div>
          <label htmlFor="email">Your Email: </label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div>
          <label htmlFor="message">Your Message: </label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-details">
        <p>Email: airish_reign_anne_bacon@dlsl.edu.ph</p>
        <p>Phone: 09637416405</p>
      </div>
    </div>
  );
};

export default App;
