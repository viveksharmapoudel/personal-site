import React from "react";
import "./About.css";
import { personalInfo, skills, workExperience, education } from "../data.js";
import Box from "@material-ui/core/Box";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

function About() {
  return (
    <div className='about' id='about'>
      <h1>
        About <span style={{ color: "#266150 " }}>Me </span>{" "}
      </h1>
      <div className='personalInfo__skills__section'>
        <div className='personal__info'>
          <h3 className='about__section_title'>Personal Info</h3>
          {personalInfo.map((item, index) => {
            const { title, value } = item;
            return (
              <div key={index} className='each__info'>
                <h4>{title}:&nbsp;</h4>
                <p className=''>{value}</p>
              </div>
            );
          })}
        </div>
        <div className='skills'>
          <h3 className='about__section_title'>My Skills</h3>
          {skills.map((item, index) => {
            const { title, value } = item;
            return (
              <div key={index} className='each__skill'>
                <h4 className='skill__title'>{title}</h4>

                <Box
                  width={`${value}%`}
                  bgcolor='#266150 '
                  p={1}
                  my={0.5}
                ></Box>
              </div>
            );
          })}
        </div>
      </div>
      <div className='edu__work__section'>
        <div className='experiences'>
          <h3 className='about__section_title'>Work Experience</h3>
          {workExperience.map((item, index) => {
            const { title, companyName, companyLocation, time, detail } = item;
            return (
              <div className='each__edu__work'>
                <div className='edu__work__icon'>
                  <WorkIcon style={{ color: "#266150" }} />
                  <div class='vertical__line'></div>
                </div>
                <div className='each__edu__work__info'>
                  <p>{time}</p>
                  <h3>
                    {title} - {companyName}
                  </h3>
                  <hr />
                  <span className='location'>{companyLocation}</span>
                  <p>{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='educations'>
          <h3 className='about__section_title'>Education</h3>
          {education.map((item, index) => {
            const {
              degreeName,
              institutionName,
              institutionLocation,
              graduateYear,
              detail,
            } = item;

            return (
              <div className='each__edu__work'>
                <div className='edu__work__icon'>
                  <SchoolIcon style={{ color: "#266150" }} />
                  <div class='vertical__line'></div>
                </div>
                <div className='each__edu__work__info'>
                  <p>{graduateYear}</p>
                  <h3>
                    {degreeName} - {institutionName}
                  </h3>
                  <hr />
                  <span className='location'>{institutionLocation}</span>
                  <p>{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
