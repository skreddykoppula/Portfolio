import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <div>
      <section id="experience" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem'}}>
        <h5>The Experience I Have</h5>
        <div className="container experience__container" style={{ padding: '2rem', borderRadius: '8px' }}>
          <div className="experience__backend" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Data Engineer</h3>
            <div className="experience__content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 0 }}>Advance Auto Parts</h4>
              <p style={{ marginLeft: '1rem', marginBottom: 0 }}>February 2024 – March 2024</p>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li className="experience__details" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {/* <BsFillPatchCheckFill className="experience__details-icon" style={{ marginRight: '0.5rem', color: '#4caf50' }} /> */}
                <p style={{ marginBottom: 0 }}>Continuously learned and applied emerging technologies to enhance data management processes, ensuring ongoing efficiency improvements.</p>
              </li>
              <li className="experience__details" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {/* <BsFillPatchCheckFill className="experience__details-icon" style={{ marginRight: '0.5rem', color: '#4caf50' }} /> */}
                <p style={{ marginBottom: 0 }}>Automated daily data processes, creating Lambda-triggered systems for real-time classification based on metadata. Enhanced efficiency and storage optimization in Snowflake tables.</p>
              </li>
              <li className="experience__details" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {/* <BsFillPatchCheckFill className="experience__details-icon" style={{ marginRight: '0.5rem', color: '#4caf50' }} /> */}
                <p style={{ marginBottom: 0 }}>Executed EDF validation project, developing code for PDF data extraction, conducting database comparisons, and generating comprehensive variance reports for streamlined data accuracy.</p>
              </li>
            </ul>
          </div>


          <div className="experience__backend" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Full Stack Developer</h3>
            <div className="experience__content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 0 }}>HappieLoop</h4>
              <p style={{ marginLeft: '1rem', marginBottom: 0 }}>October 2023 – November 2024</p>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li className="experience__details" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {/* <BsFillPatchCheckFill className="experience__details-icon" style={{ marginRight: '0.5rem', color: '#4caf50' }} /> */}
                <p style={{ marginBottom: 0 }}>Developed FlaskBlog website, enabling user registration and facilitating blog posting.</p>
              </li>
              <li className="experience__details" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {/* <BsFillPatchCheckFill className="experience__details-icon" style={{ marginRight: '0.5rem', color: '#4caf50' }} /> */}
                <p style={{ marginBottom: 0 }}>Implemented features allowing users to create, edit, and view blog posts.</p>
              </li>
              <li className="experience__details" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {/* <BsFillPatchCheckFill className="experience__details-icon" style={{ marginRight: '0.5rem', color: '#4caf50' }} /> */}
                <p style={{ marginBottom: 0 }}>Contributed to a collaborative team environment, ensuring seamless functionality and user experience.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>



    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end & Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Flask</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Programming Skills</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>DSA</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Data Analytics</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Snowflake</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Pyspark</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>AWS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Machine Learning</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Deep Learning</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>NLP</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Experience