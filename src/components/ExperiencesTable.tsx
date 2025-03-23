import { SectionTitle } from "@/components/SectionTitle";
import { Experience } from "@/types/Experience";
import { formatDifferenceInMonths } from "@/utils/formatDifferenceInMonths";
import { format, parseISO } from "date-fns";

interface Props {
  data: Array<Experience>;
}

export const ExperiencesTable = ({ data }: Props) => {
  const totalExperience = formatDifferenceInMonths(
    "2013-03-01",
    format(new Date(), "yyyy-MM-dd")
  );

  return (
    <section>
      <SectionTitle>Experiences ({totalExperience}).</SectionTitle>

      <div className="flex flex-col gap-1">
        {data.map((item, index) => {
          const startDate = parseISO(item.startDate);
          const endDate = item.endDate ? parseISO(item.endDate) : undefined;

          const period = `${format(startDate, "MMM yyyy")} - ${
            endDate ? format(endDate, "MMM yyyy") : "Present"
          }`;

          return (
            <div
              key={index}
              className="p-3 bg-gray-800 rounded flex flex-col gap-1"
            >
              <div className="flex justify-between italic items-center">
                <div className="text-lg">
                  <span className="underline">{item.title}</span> ·{" "}
                  {item.company}
                </div>
                <span className="text-sm text-gray-500">
                  ({period} ·{" "}
                  {formatDifferenceInMonths(
                    item.startDate,
                    item.endDate ?? format(new Date(), "yyyy-MM-dd")
                  )}
                  )
                </span>
              </div>

              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
