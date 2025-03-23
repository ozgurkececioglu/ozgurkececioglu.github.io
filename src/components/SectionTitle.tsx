import React from "react";

interface Props {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: Props) => {
  return (
    <div className="p-3 bg-gray-800 rounded flex text-xl text-yellow-300 items-center justify-center italic mb-2">
      {children}
    </div>
  );
};
