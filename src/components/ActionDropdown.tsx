"use client";
import { DropdownCaret } from "@/components/DropdownCaret";
import React, { useState } from "react";
import { usePopper } from "react-popper";

export const ActionDropdown = () => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="absolute bg-gray-100 right-2 -top-2 text-red-500 p-1 shadow-2xl rounded w-48 text-center cursor-pointer hover:bg-gray-200 border-s-red-100 flex items-center"
        ref={setReferenceElement}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-44 text-center">Action</span>
        <DropdownCaret />
      </div>

      {isOpen && (
        <div
          className="bg-gray-200 text-black p-2 shadow-2xl rounded w-48 text-center flex flex-col divide-gray-300 divide-y"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className=" hover:bg-gray-300 p-1 w-full">
            <a href="https://www.linkedin.com/in/ozgurkececioglu/">
              <button className="w-full cursor-pointer">LinkedIn</button>
            </a>
          </div>
          <div className=" hover:bg-gray-300 p-1 w-full">
            <a href="https://github.com/ozgurkececioglu">
              <button className="w-full cursor-pointer">GitHub</button>
            </a>
          </div>
          <div className="cursor-pointer hover:bg-gray-300 p-1">
            <a href="/CV_OzgurKececioglu.pdf" target="_blank" download>
              <button className="w-full cursor-pointer">CV as PDF</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
