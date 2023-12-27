import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Aayush Thapaliya</strong>. I'm
              originally from Nepal and have been living in US for the past
              three years as a Resident. During my time here, I gained valuable
              experience through various projects with my team mates, which
              greatly enhanced my work ethic, communication skills, and
              adaptability.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I am a certified solution architect and a Computer Science student
              based in Arlington, Texas. Currently pursuing a Bachelor's degree
              at the University of Texas at Arlington, with an expected
              graduation in 2027. I have a strong proficiency in programming
              languages such as Python, HTML/CSS, JavaScript, and C++. I am
              experienced in utilizing frameworks like ReactJS, NodeJS, and
              Django. Some notable projects I have worked on include developing
              a full-stack chatbot with AI capabilities, Trading Bot and
              implementing secure authentication using the MERN stack. Alongside
              my academic pursuits, I have also worked as a tutor, fostering a
              supportive learning environment, and gained valuable experience at
              an Amazon Delivery Station, refining my communication skills.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
