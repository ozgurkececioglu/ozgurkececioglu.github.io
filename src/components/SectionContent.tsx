import React from "react";

interface Props {
  children: React.ReactNode;
}

export const SectionContent = ({ children }: Props) => {
  return <div className="p-3 bg-gray-800 rounded mb-4">{children}</div>;
};
