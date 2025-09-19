import { experiences } from "@/data/Experiences";
import { skills } from "@/data/Skills";

export const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ozgur Kececioglu",
    jobTitle: "Senior Frontend Engineer",
    description: "Senior Frontend Engineer with 8+ years experience in React.js, TypeScript, Next.js. Expert in team leadership, UI libraries, and scalable frontend architecture.",
    url: "https://ozgurkececioglu.github.io",
    birthDate: "1989-02-06",
    nationality: "Turkish",
    knowsLanguage: ["English", "Turkish"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Hacettepe University",
      department: "Computer Engineering",
      graduationYear: "2013"
    },
    worksFor: {
      "@type": "Organization",
      name: "Tekmetric",
      description: "Automotive industry software company"
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Frontend Engineer",
      occupationLocation: {
        "@type": "Place",
        name: "Remote/Global"
      },
      skills: skills.map(skill => skill.title),
      experienceRequirements: "8+ years of frontend development experience"
    },
    workExample: experiences.map(exp => ({
      "@type": "CreativeWork",
      name: `${exp.title} at ${exp.company}`,
      description: exp.description.join(" "),
      dateCreated: exp.startDate,
      dateModified: exp.endDate || new Date().toISOString().split('T')[0]
    })),
    knowsAbout: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Frontend Architecture",
      "Team Leadership",
      "UI Libraries",
      "JavaScript",
      "CSS",
      "HTML5",
      "Node.js",
      "Testing",
      "CI/CD",
      "Performance Optimization",
      "Accessibility",
      "Mentoring"
    ],
    seeks: {
      "@type": "Demand",
      name: "Senior Frontend Engineering Opportunities"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ozgur Kececioglu - Frontend Development Services",
    description: "Professional frontend development services specializing in React.js, TypeScript, and team leadership",
    provider: {
      "@type": "Person",
      name: "Ozgur Kececioglu"
    },
    areaServed: "Global",
    serviceType: "Frontend Development"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  );
};
