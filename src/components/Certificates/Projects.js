import React, { useState } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// Updated categories to match tags and handle filtering
const categories = [
  "All",
  "Django",
  "Python",
  "API",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "CSS",
  "HTML",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Case-insensitive tag filtering
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.tags.some(
      (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "2rem",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
            style={{
              padding: "8px 16px",
              background:
                activeCategory === category ? "#0f0f0f" : "#eaeaea",
              color: activeCategory === category ? "#fff" : "#000",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <GridContainer style={{ display: "grid", gap: "2rem" }}>
        {visibleProjects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Tags</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source} target="_blank">Source Code</ExternalLinks>
                <ExternalLinks href={visit} target="_blank">Live Demo</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>

      {/* Show More / Show Less Button */}
      {filteredProjects.length > 6 && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            style={{
              padding: "10px 20px",
              background: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </Section>
  );
};

export default Projects;
