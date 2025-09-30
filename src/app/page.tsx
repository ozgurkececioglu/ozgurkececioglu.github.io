import { ContactInfo } from "@/components/ContactInfo";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { experiences } from "@/data/Experiences";
import { skills } from "@/data/Skills";
import { differenceInYears, format } from "date-fns";

const dateOfBirth = new Date("1989-02-06");

const Home = () => {
  const expertSkills = skills.filter((skill) => skill.level >= 16);
  const totalYearsExperience = differenceInYears(
    new Date(),
    new Date("2016-01-01")
  );

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100" role="main">
      {/* Compact Hero Section */}
      <section className="relative px-4 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header with Action Dropdown */}
          <div className="flex justify-between items-start mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Name and Title */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ozgur Kececioglu
              </h1>

              <div className="text-xl md:text-2xl text-gray-300 mb-6">
                <span className="text-blue-400 font-semibold">
                  Senior Frontend Engineer
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span>React.js & TypeScript Expert</span>
              </div>

              {/* Current Role Highlight */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-400 font-semibold">Currently @</div>
                  <div className="text-xl font-bold text-white">Tekmetric</div>
                  <div className="px-2 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                    Active
                  </div>
                </div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  Leading frontend architecture for automotive SaaS platform
                  serving 10,000+ shops. Implementing scalable React.js
                  solutions, improving maintainability by 40%.
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {totalYearsExperience}+
                  </div>
                  <div className="text-xs text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {expertSkills.length}
                  </div>
                  <div className="text-xs text-gray-300">Expert Skills</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-green-500/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    5+
                  </div>
                  <div className="text-xs text-gray-300">Mentored</div>
                </div>
              </div>
            </div>

            {/* Right Column - Top Skills & Recent Highlights */}
            <div className="space-y-6">
              {/* What I Do Best */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  � What I Do Best
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-sm">🏗️</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Frontend Architecture</div>
                      <div className="text-xs text-gray-400">Scalable React.js solutions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 text-sm">👥</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Team Leadership</div>
                      <div className="text-xs text-gray-400">Mentoring & code quality</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 text-sm">⚡</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Performance Optimization</div>
                      <div className="text-xs text-gray-400">CI/CD & build improvements</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 text-sm">🔧</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">UI Library Development</div>
                      <div className="text-xs text-gray-400">Reusable component systems</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Highlights */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  ⭐ Recent Highlights
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-sm text-gray-300">
                      <span className="text-blue-400 font-medium">
                        Tekmetric:
                      </span>{" "}
                      Leading frontend architecture for 10K+ automotive shops
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-sm text-gray-300">
                      <span className="text-purple-400 font-medium">
                        Bayzat:
                      </span>{" "}
                      Reduced build times 60% with monorepo migration
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-sm text-gray-300">
                      <span className="text-green-400 font-medium">
                        TopTal:
                      </span>{" "}
                      Enhanced UI library for 10+ internal apps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Skills Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specialized in modern frontend technologies with deep expertise in
              React ecosystem and team leadership
            </p>
          </div>
          <SkillsGrid data={skills} />
        </div>
      </section>
      {/* Experience Timeline */}
      <section className="px-4 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {totalYearsExperience}+ years of experience building scalable
              frontend applications and leading development teams
            </p>
          </div>
          <ExperienceTimeline data={experiences} />
        </div>
      </section>
      {/* About & Contact */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                About Me
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  I graduated from Hacettepe University, Department of Computer
                  Engineering in 2013. With over {totalYearsExperience} years of
                  experience, I specialize in developing and maintaining
                  scalable frontend applications that serve millions of users.
                </p>
                <p>
                  My passion lies in leading frontend teams, mentoring
                  developers, and contributing to architectural decisions that
                  shape the future of web applications. I have extensive
                  experience in developing public UI libraries, optimizing CI/CD
                  pipelines, and implementing comprehensive testing strategies.
                </p>
                <p className="text-blue-400">
                  I find the most satisfaction in unblocking team members and
                  helping them grow their skills, creating an environment where
                  everyone can deliver their best work.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">
                Let&apos;s Connect
              </h2>
              <ContactInfo />

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Personal Info
                </h3>
                <div className="text-gray-400 space-y-2">
                  <p>
                    Born {format(dateOfBirth, "MMMM d, yyyy")} (Age{" "}
                    {differenceInYears(new Date(), dateOfBirth)})
                  </p>
                  <p>Nationality: Turkish</p>
                  <p>Location: Remote / Flexible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
