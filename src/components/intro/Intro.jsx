import React from 'react';
// import { FaAward } from 'react-icons/fa';
// import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';
import { FaGraduationCap } from 'react-icons/fa'; // Import the necessary icons from react-icons
// import { VscFolderLibrary } from 'react-icons/vsc'; 

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
      <article className="about__card">
        <FaGraduationCap className="about__icon" />
        <h5>Education</h5>
        <ul>
          <li>Vardhaman College of Engineering (2020 - Present)</li>
          <li>Narayana Junior College (2018 - 2020)</li>
          <li>Krishnaveni Talent School (2018)</li>
        </ul>
      </article>
    </div>

          <p>As a dedicated student, I have been immersing myself in the world of web development, delving into the intricacies of HTML, CSS, and JavaScript. My journey has been a captivating one, as I've been building everything from visually stunning landing pages to powerful APIs.
            </p><p> Throughout my learning process, I've embraced challenges with a determined spirit, constantly striving to improve and expand my skill set. The fast-paced nature of the tech industry excites me, and I've found that my ability to remain productive and efficient, even in stressful situations, has been a valuable asset in this dynamic field.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro