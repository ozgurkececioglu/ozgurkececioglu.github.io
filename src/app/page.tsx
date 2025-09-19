import { ActionDropdown } from "@/components/ActionDropdown";
import { ContactInfo } from "@/components/ContactInfo";
import { ExperiencesTable } from "@/components/ExperiencesTable";
import { SectionContent } from "@/components/SectionContent";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillsLegend } from "@/components/SkillsLegend";
import { SkillTable } from "@/components/SkillTable";
import { experiences } from "@/data/Experiences";
import { skills } from "@/data/Skills";
import { differenceInYears, format } from "date-fns";

const dateOfBirth = new Date("1989-02-06");

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 gap-4 font-figtree font-bold" role="main">
      <header className="bg-red-500 rounded p-4 flex items-center justify-center relative">
        <h1 className="text-white text-3xl">
          Ozgur Kececioglu (Sr. Frontend Engineer)
        </h1>

        <ActionDropdown />
      </header>

      <section aria-labelledby="personal-info" className="mb-4">
        <h2 id="personal-info" className="sr-only">Personal Information</h2>
        <SectionTitle>
          Born {format(dateOfBirth, "d.M.yy")} (Age{" "}
          {differenceInYears(new Date(), dateOfBirth)}). Turkish.
        </SectionTitle>
      </section>

      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="sr-only">Technical Skills</h2>
        <SkillTable data={skills} />
        <SkillsLegend />
      </section>

      <div className="grid grid-cols-2 gap-4">
        <section className="flex flex-col" aria-labelledby="background-heading">
          <h2 id="background-heading">
            <SectionTitle>Background</SectionTitle>
          </h2>

          <SectionContent>
            I graduated from Hacettepe University, Department of Computer
            Engineering in 2013. I have been working as a frontend developer for
            more than 8 years. I have experience in developing and maintaining
            scalable and maintainable frontend applications. I can define myself
            as hard-working, eager to learn and self-disiplined developer.
            <br />
            <br />I have experience in leading frontend teams, mentoring
            developers, and contributing to the frontend architecture. I have
            experience in developing and maintaining public UI libraries,
            optimizing CI/CD pipelines, and improving visual testing.
          </SectionContent>

          <h3>
            <SectionTitle>Interests</SectionTitle>
          </h3>

          <SectionContent>
            I love to learn new technologies and improve myself. I am interested
            in web technologies, frontend frameworks, and libraries. I have the
            most fun from unblocking my team members and helping them to improve
            their skills.
          </SectionContent>

          <ContactInfo />
        </section>

        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="sr-only">Professional Experience</h2>
          <ExperiencesTable data={experiences} />
        </section>
      </div>
    </main>
  );
};

export default Home;
