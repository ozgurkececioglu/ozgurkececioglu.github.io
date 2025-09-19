import { SectionContent } from "./SectionContent";
import { SectionTitle } from "./SectionTitle";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle>Contact & Professional Links</SectionTitle>

      <SectionContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:ozgurkececioglu@gmail.com"
              className="text-blue-400 hover:text-blue-300 underline"
              itemProp="email"
            >
              ozgurkececioglu@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Location:</span>
            <span itemProp="address">Ankara, Turkey (Remote available)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">LinkedIn:</span>
            <a
              href="https://linkedin.com/in/ozgurkececioglu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
              itemProp="sameAs"
            >
              linkedin.com/in/ozgurkececioglu
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">GitHub:</span>
            <a
              href="https://github.com/ozgurkececioglu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
              itemProp="sameAs"
            >
              github.com/ozgurkececioglu
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Resume:</span>
            <a
              href="/CV_OzgurKececioglu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
              download
            >
              Download PDF Resume
            </a>
          </div>
        </div>
      </SectionContent>
    </div>
  );
};
