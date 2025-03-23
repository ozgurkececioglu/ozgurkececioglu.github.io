import { Skill } from "@/types/Skill";
import { times } from "lodash";

interface Props {
  data: Array<Skill>;
}

export const SkillTable = ({ data }: Props) => {
  const rows = Math.ceil(data.length / 3);

  return (
    <section className="grid grid-cols-3 gap-1">
      {times(3, (i) => (
        <div key={i} className="flex flex-col gap-1">
          {data.slice(i * rows, (i + 1) * rows).map((skill) => (
            <div key={skill.title} className="flex italic gap-1 h-12">
              <div className="flex-2/3 p-1 bg-gray-800 px-2 flex flex-col justify-center">
                {skill.title}
                {skill.subtitle && (
                  <span className="text-xs text-gray-500 ml-1">
                    ({skill.subtitle})
                  </span>
                )}
              </div>
              <div
                className="flex-1/3 p-1 bg-gray-800 flex items-center justify-center"
                style={{ color: skillColors[Math.floor(skill.level / 3) - 1] }}
              >
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

const skillColors = [
  "rgb(0, 255, 0)", // 1-3 - Green (Beginner)
  "rgb(170, 204, 0)", // 4-7 - Yellow-Green
  "rgb(255, 204, 0)", // 8-11 - Yellow
  "rgb(255, 136, 0)", // 12-14 - Orange
  "rgb(255, 68, 0)", // 15-17 - Red-Orange
  "rgb(255, 0, 0)", // 18-20 - Red (Expert)
];
