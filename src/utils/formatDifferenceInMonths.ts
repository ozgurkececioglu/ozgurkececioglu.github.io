import { differenceInMonths, parseISO } from "date-fns";

export function formatDifferenceInMonths(
  startDate: string,
  endDate: string
): string {
  const start = parseISO(startDate);
  const end = parseISO(endDate);

  const months = differenceInMonths(end, start);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const result = [];

  if (years > 0) {
    result.push(`${years} yr${years > 1 ? "s" : ""}`);
  }

  if (remainingMonths > 0) {
    result.push(`${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`);
  }

  return result.join(" ");
}
