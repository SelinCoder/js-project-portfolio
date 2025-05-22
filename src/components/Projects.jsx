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
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  will-change: scroll-position;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c57763;
    border-radius: 10px;
  }
`;

const ProjectCard = styled.div`
  width: 25vw;
  min-width: 280px;
  height: 500px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
  }
`;

const ProjectImage = styled.img.attrs(() => ({
  loading: "lazy",
}))`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProjectTitle = styled.h2`
  font-size: 22px;
  margin: 12px 0 6px;
  min-height: 50px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 16px;
  min-height: 60px;
  text-align: center;
`;

const SkillsWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`;

const SkillBox = styled.span`
  display: inline-block;
  background: #f0f0f0;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  font-size: 17px;
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c57763;
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

  // Jämn, automatisk scroll
  useEffect(() => {
    const wrapper = scrollRef.current;
    if (!wrapper || !carouselActive) return;

    const speed = 1; // px per steg
    const interval = setInterval(() => {
      if (hovering) return;

      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
      if (wrapper.scrollLeft >= maxScrollLeft) {
        wrapper.scrollTo({ left: 0, behavior: "auto" });
      } else {
        wrapper.scrollBy({ left: speed, behavior: "auto" });
      }
    }, 30); // justera 20–60ms för mjukare/snabbare scroll

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
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <ProjectImage src={p.image} alt={p.title} />
              <ProjectTitle>{p.title}</ProjectTitle>
              <Paragraph>{p.description}</Paragraph>

              <SkillsWrapper>
                {p.skills.map((skill, i) => (
                  <SkillBox key={i}>{skill}</SkillBox>
                ))}
              </SkillsWrapper>

              <Button onClick={() => window.open(p.link, "_blank")}>
                Visit site
              </Button>
            </ProjectCard>
          ))}
        </ScrollWrapper>
      </ProjectContainer>
    </Content>
  );
};

export default Projects;
