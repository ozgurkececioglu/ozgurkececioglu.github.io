"use client";

import { Experience } from "@/types/Experience";
import { formatDifferenceInMonths } from "@/utils/formatDifferenceInMonths";
import { format, parseISO } from "date-fns";
import { useState } from "react";

interface Props {
  data: Array<Experience>;
}

export const ExperienceTimeline = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

      <div className="space-y-8">
        {data.map((experience, index) => {
          const startDate = parseISO(experience.startDate);
          const endDate = experience.endDate ? parseISO(experience.endDate) : undefined;
          const period = `${format(startDate, "MMM yyyy")} - ${
            endDate ? format(endDate, "MMM yyyy") : "Present"
          }`;
          const duration = formatDifferenceInMonths(
            experience.startDate,
            experience.endDate ?? format(new Date(), "yyyy-MM-dd")
          );

          const isActive = activeIndex === index;
          const isCurrentJob = !experience.endDate;

          return (
            <div
              key={index}
              className="relative flex items-start group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                  isCurrentJob
                    ? "bg-green-400 border-green-400 shadow-lg shadow-green-400/50"
                    : isActive
                      ? "bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/50"
                      : "bg-gray-600 border-gray-600"
                }`}>
                  {isCurrentJob && (
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="ml-8 flex-grow">
                <div className={`bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  isActive
                    ? "border-blue-500/50 shadow-xl shadow-blue-500/10"
                    : "border-gray-700/50"
                }`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {experience.title}
                      </h3>
                      <div className="text-lg text-blue-400 font-semibold">
                        {experience.company}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right">
                      <div>{period}</div>
                      <div className="text-purple-400">{duration}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={`transition-all duration-300 ${
                    isActive ? "max-h-96 opacity-100" : "max-h-24 opacity-75"
                  } overflow-hidden`}>
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand indicator */}
                  {!isActive && (
                    <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
                      <span>Hover to expand</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
