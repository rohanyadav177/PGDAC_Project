import React from 'react';
import './About.css'; 
import NavbarHeader from './NavbarHeader';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <NavbarHeader></NavbarHeader>
    <div className="about-us-container">
      <h1 className="heading">Welcome to HealthCare: Seamless Health Insurance Solution System</h1>
      
      <section className="section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-content">
          At Healthcare, we are dedicated to providing a seamless and efficient platform for individuals and families to access quality health insurance policies. Our mission is to simplify the process of obtaining health insurance, ensuring that everyone can easily find the coverage they need to protect their health and well-being.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-member">
          <h3>Preeti Sharma</h3>
          
        </div>

        <div className="team-member">
          <h3>Pratik Ingale</h3>
         
        </div>

        <div className="team-member">
          <h3>Karan Khoje</h3>
       
        </div>

        <div className="team-member">
          <h3>Pushpak Bavaskar</h3>
         
        </div>

        <div className="team-member">
          <h3>Rohan Yadav</h3>
          
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Technology Stack</h2>
        <ul className="tech-stack-list">
          <li><h6>Java Spring Boot</h6>We utilize Java Spring Boot for our REST API development, ensuring robust and scalable backend functionality.</li>
          <li><h6>JPA (Java Persistence API)</h6> Our application leverages JPA for efficient data persistence and management.</li>
          <li><h6>React JS</h6> The frontend of our web application is built using React JS, providing a dynamic and interactive user experience.</li>
          <li><h6>Redux</h6> Redux is employed for state management within our React application, ensuring a consistent and predictable user interface.</li>
          <li><h6>Bootstrap</h6> We use Bootstrap to streamline the design and layout of our web pages, ensuring responsiveness and compatibility across devices.</li>
          <li><h6>MySQL</h6> Our database management system of choice is MySQL, offering reliability and performance for storing critical application data.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-content">
          We value your feedback and inquiries. Feel free to reach out to us with any questions or concerns regarding our platform or services. You can contact us at [insert contact information].
        </p>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
};

export default About;