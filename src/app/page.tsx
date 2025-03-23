import { ActionDropdown } from "@/components/ActionDropdown";
import { ExperiencesTable } from "@/components/ExperiencesTable";
import { SectionContent } from "@/components/SectionContent";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillTable } from "@/components/SkillTable";
import { experiences } from "@/data/Experiences";
import { skills } from "@/data/Skills";
import { differenceInYears, format } from "date-fns";

const dateOfBirth = new Date("1989-02-06");

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen p-4 gap-4 font-figtree font-bold">
      <div className="bg-red-500 rounded p-4 flex items-center justify-center relative">
        <h1 className="text-white text-3xl">
          Ozgur Kececioglu (Sr. Frontend Engineer)
        </h1>

        <ActionDropdown />
      </div>

      <SectionTitle>
        Born {format(dateOfBirth, "d.M.yy")} (Age{" "}
        {differenceInYears(new Date(), dateOfBirth)}). Turkish.
      </SectionTitle>

      <SkillTable data={skills} />

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <SectionTitle>Background</SectionTitle>

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

          <SectionTitle>Interests</SectionTitle>

          <SectionContent>
            I love to learn new technologies and improve myself. I am interested
            in web technologies, frontend frameworks, and libraries. I have the
            most fun from unblocking my team members and helping them to improve
            their skills.
          </SectionContent>
        </div>

        <ExperiencesTable data={experiences} />
      </div>
    </div>
  );
};

export default Home;
