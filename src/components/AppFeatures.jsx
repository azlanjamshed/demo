const icons = {
  grooming: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M7 3v8M4 6h6M17 3v8M14 6h6" />
      <path d="M5 15c0 3 2 5 7 5s7-2 7-5" />
    </svg>
  ),

  walking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="9" cy="5" r="2" />
      <path d="M9 8l-2 5 3 2 2 6M7 13l-4 4M10 10l4 3 4-1" />
    </svg>
  ),

  boarding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),

  vet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 5v14M5 12h14" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),

  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),

  payment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  ),

  bookings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  ),

  schedule: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),

  services: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </svg>
  ),

  earnings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 19V9M10 19V5M16 19V11M22 19V3" />
    </svg>
  ),
};

export default function AppFeatures({ features }) {
  return (
    <div className="grid grid-cols-2 border-y border-[#c9c5bd] sm:grid-cols-3 lg:grid-cols-6">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="border-r border-b border-[#c9c5bd] p-5 last:border-r-0 lg:border-b-0"
        >
          <div className="mb-4 h-7 w-7 text-[#446040]">
            {icons[feature.icon]}
          </div>

          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#1f2a33]">
            {feature.title}
          </p>

          <p className="mt-2 font-sans text-[11px] leading-5 text-[#6b6c68]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
