"use client";

import { Skill } from "@/types/Skill";
import { useState } from "react";

interface Props {
  data: Array<Skill>;
}

export const SkillsGrid = ({ data }: Props) => {
  const [filter, setFilter] = useState<"all" | "expert" | "proficient" | "intermediate">("all");

  const filteredSkills = data.filter(skill => {
    switch (filter) {
      case "expert": return skill.level >= 16;
      case "proficient": return skill.level >= 11 && skill.level < 16;
      case "intermediate": return skill.level >= 6 && skill.level < 11;
      default: return true;
    }
  });

  const getSkillCategory = (level: number) => {
    if (level >= 16) return { label: "Expert", color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/30" };
    if (level >= 11) return { label: "Proficient", color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30" };
    if (level >= 6) return { label: "Intermediate", color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/30" };
    return { label: "Learning", color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" };
  };

  const getProgressWidth = (level: number) => `${(level / 20) * 100}%`;

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { key: "all", label: "All Skills", count: data.length },
          { key: "expert", label: "Expert", count: data.filter(s => s.level >= 16).length },
          { key: "proficient", label: "Proficient", count: data.filter(s => s.level >= 11 && s.level < 16).length },
          { key: "intermediate", label: "Intermediate", count: data.filter(s => s.level >= 6 && s.level < 11).length },
        ].map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setFilter(key as "all" | "expert" | "proficient" | "intermediate")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === key
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
            }`}
          >
            {label} ({count})
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => {
          const category = getSkillCategory(skill.level);

          return (
            <div
              key={skill.title}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Skill header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-tight mb-1 group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h3>
                  {skill.subtitle && (
                    <p className="text-xs text-gray-400 leading-tight">
                      {skill.subtitle}
                    </p>
                  )}
                </div>
                <div className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${category.bg} ${category.border} border`}>
                  <span className={category.color}>{skill.level}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-2">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      skill.level >= 16 ? "bg-gradient-to-r from-red-500 to-red-400" :
                      skill.level >= 11 ? "bg-gradient-to-r from-orange-500 to-orange-400" :
                      skill.level >= 6 ? "bg-gradient-to-r from-yellow-500 to-yellow-400" :
                      "bg-gradient-to-r from-green-500 to-green-400"
                    }`}
                    style={{ width: getProgressWidth(skill.level) }}
                  />
                </div>
              </div>

              {/* Category label */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium ${category.color}`}>
                  {category.label}
                </span>
                <span className="text-xs text-gray-500">
                  {Math.round((skill.level / 20) * 100)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-12 p-6 bg-gray-800/20 rounded-xl border border-gray-700/30">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">Skill Level Guide</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Learning", range: "1-5", color: "text-green-400", bg: "bg-green-500/20" },
            { label: "Intermediate", range: "6-10", color: "text-yellow-400", bg: "bg-yellow-500/20" },
            { label: "Proficient", range: "11-15", color: "text-orange-400", bg: "bg-orange-500/20" },
            { label: "Expert", range: "16-20", color: "text-red-400", bg: "bg-red-500/20" },
          ].map(({ label, range, color, bg }) => (
            <div key={label} className={`${bg} rounded-lg p-3 text-center`}>
              <div className={`font-semibold ${color}`}>{label}</div>
              <div className="text-xs text-gray-400">{range} points</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
