import React from 'react';
import IMG1 from '../../assets/newsmonkey.png';
import IMG2 from '../../assets/chatgpt.jpg';
import IMG3 from '../../assets/idcard.png';
import IMG4 from '../../assets/flaskblog.png';
import IMG5 from '../../assets/textutils.png';
// import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'News Monkey',
      img: IMG1,
      description:
        `NewsMonkey website built with React.js delivers 
        daily news in a visually engaging and responsive 
        manner`,
      technologies: 'React',
      link: null,
      github: 'https://github.com/skreddykoppula/News-Monkey-React',
    },
    {
      id: 2,
      title: 'FlaskBlog',
      img: IMG4,
      description:
        `FlaskBlog is a user-friendly web application that 
        allows users to register, login, and share their 
        personal blogs while exploring and reading 
        posts from other bloggers in the community.`,
      technologies: 'Flask',
      link: null,
      github: 'https://github.com/skreddykoppula/FlaskBlog',
    },
    {
      id: 3,
      title: 'Personalized Travel Recommendation with ChatGPT',
      img: IMG2,
      description: `By integrating the ChatGPT API into Django 
      personalized travel recommendation become 
      possible. The system understands user 
      preferences and history, resulting in improved 
      user engagement through interactive and real-
      time responses.`,
      technologies: 'Django | ChatGpt API',
      link: null,
      github: 'https://github.com/skreddykoppula/travello-chatgpt',
    },
    {
      id: 4,
      title: 'ID card Generator',
      img: IMG3,
      description:
        'Fully responsive interactive website used to generate ID cards for students',
      technologies: 'JavaScript | CSS',
      link: 'https://skreddykoppula.github.io/idcard/',
      github: 'https://github.com/skreddykoppula/idcard',
    },
    {
      id: 5,
      title: 'Text Utils',
      img: IMG5,
      description:
        `A textutils React-based app is a web application that utilizes the React JavaScript library to provide various utility functions for handling and manipulating text.`,
      technologies: 'React',
      link: 'https://skreddykoppula.github.io/TextUtils-React/',
      github: 'https://github.com/skreddykoppula/TextUtils-React',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {pro.link ? (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                ) : null}

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
