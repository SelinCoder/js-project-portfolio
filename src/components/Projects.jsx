import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Content from "./Content";
import image1 from "../assets/AIRobots.jpg";
import image2 from "../assets/Recipelibrarypage.png";
import image3 from "../assets/WeatherApp.png";
import image4 from "../assets/AccessibilityQuiz.png";
import image5 from "../assets/Portfoliopage.png";

const ProjectContainer = styled.div`
  background-color: #e3c4b14a;
  width: 100%;
  padding: 60px 20px;
  position: relative;
  padding: 60px 20px 400px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: black;
  text-align: center;
  margin-bottom: 40px;
`;

const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding-bottom: 20px;
  align-items: stretch;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c57763;
    border-radius: 10px;
  }
`;

const Projects = () => {
  const scrollRef = useRef();
  const containerRef = useRef();
  const [hovering, setHovering] = useState(false);
  const [carouselActive, setCarouselActive] = useState(false);

  const projectList = [
    {
      title: "AI Robots Company",
      image: image1,
      description: "Business webpage with animations.",
      link: "https://airobotscompany.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Recipe Library",
      image: image2,
      description: "Recipe app with filtering and API.",
      link: "https://selinsrecipelibrary.netlify.app",
      skills: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      title: "Rainchecker",
      image: image3,
      description: "Weather app using TypeScript.",
      link: "https://rainchecker.netlify.app/",
      skills: ["TypeScript", "API", "HTML", "CSS"],
    },
    {
      title: "Accessibility Quiz",
      image: image4,
      description: "Web accessibility quiz with WCAG focus.",
      link: "https://web-accessibility-quiz.netlify.app/",
      skills: ["HTML", "CSS", "JS", "WCAG"],
    },
    {
      title: "Portfolio",
      image: image5,
      description: "My developer portfolio site.",
      link: "https://your-portfolio.netlify.app/",
      skills: ["React", "Styled Components", "JavaScript"],
    },
  ];

  // Aktivera scroll endast när sektionen är i bild
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCarouselActive(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const ScrollWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 30px;
    padding-bottom: 20px;
    height: auto; /* 🟢 Gör så att höjden växer automatiskt */

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c57763;
      border-radius: 10px;
    }
  `;

  // Jämn, automatisk scroll
  useEffect(() => {
    const wrapper = scrollRef.current;
    if (!wrapper || !carouselActive) return;

    const speed = 1;
    const interval = setInterval(() => {
      if (hovering) return;

      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
      if (wrapper.scrollLeft >= maxScrollLeft) {
        wrapper.scrollTo({ left: 0, behavior: "auto" });
      } else {
        wrapper.scrollBy({ left: speed, behavior: "auto" });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hovering, carouselActive]);

  return (
    <Content>
      <ProjectContainer ref={containerRef}>
        <Title>Projects</Title>
        <ScrollWrapper ref={scrollRef}>
          {projectList.map((p, index) => (
            <ProjectCard
              key={index}
              image={p.image}
              title={p.title}
              description={p.description}
              skills={p.skills}
              link={p.link}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            />
          ))}
        </ScrollWrapper>
      </ProjectContainer>
    </Content>
  );
};

export default Projects;
