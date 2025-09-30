export const ContactInfo = () => {
  const contacts = [
    {
      label: "Email",
      value: "ozgurkececioglu@gmail.com",
      href: "mailto:ozgurkececioglu@gmail.com",
      icon: "📧",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ozgurkececioglu",
      href: "https://linkedin.com/in/ozgurkececioglu",
      icon: "💼",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      label: "GitHub",
      value: "github.com/ozgurkececioglu",
      href: "https://github.com/ozgurkececioglu",
      icon: "🔗",
      color: "text-purple-400 hover:text-purple-300"
    },
    {
      label: "Resume",
      value: "Download PDF Resume",
      href: "/CV_OzgurKececioglu.pdf",
      icon: "📄",
      color: "text-green-400 hover:text-green-300",
      download: true
    }
  ];

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.label}
          className="group flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
        >
          <div className="text-2xl">{contact.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contact.color} transition-colors font-medium break-all`}
              {...(contact.download && { download: true })}
              itemProp={contact.label === "Email" ? "email" : "sameAs"}
            >
              {contact.value}
            </a>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      ))}

      <div className="text-center mt-6 p-4 bg-gray-800/20 rounded-xl border border-gray-700/20">
        <div className="text-gray-400 text-sm mb-2">Location</div>
        <div className="text-gray-300">Ankara, Turkey 🇹🇷</div>
        <div className="text-blue-400 text-sm mt-1">Remote opportunities available</div>
      </div>
    </div>
  );
};
