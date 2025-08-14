import React, { useState } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Certificates } from "../../constants/constants";

// Optional categories for filtering (if needed)
const categories = ["All"];

const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Filter certificates by category
  const filteredCertificates = Certificates.filter((cert) => {
    if (activeCategory === "All") return true;
    return cert.issuer?.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const visibleCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, 6);

  return (
    <Section nopadding id="certificates">
      <SectionDivider />
      <SectionTitle main>Certificates</SectionTitle>

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
              background: activeCategory === category ? "#0f0f0f" : "#eaeaea",
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

      {/* Certificates Grid */}
      <GridContainer style={{ display: "grid", gap: "2rem" }}>
        {visibleCertificates.map(
          ({
            id,
            image,
            certificate_title,
            certificate_description,
            issueDate,
            issuer,
            source,
          }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{certificate_title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{certificate_description}</CardInfo>
              {issuer && issueDate && (
                <CardInfo>
                  <strong>Issuer:</strong> {issuer} <br />
                  <strong>Date:</strong> {issueDate}
                </CardInfo>
              )}
              <UtilityList>
                {/* Download Certificate Button */}
                {source && (
                  <ExternalLinks href={source} target="_blank" download>
                    Download Certificate
                  </ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>

      {/* Show More / Show Less Button */}
      {filteredCertificates.length > 6 && (
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

export default CertificatesSection;
