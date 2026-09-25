"use client";

export default function AppStoreButtons({
  appStoreUrl = "#",
  playStoreUrl = "#",
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* App Store */}
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="group"
      >
        <div className="flex h-[52px] min-w-[165px] items-center gap-3 rounded-md bg-[#1f2a33] px-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#446040]">
          <svg
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.65 14.27C19.62 10.86 22.44 9.2 22.57 9.12C20.97 6.79 18.5 6.47 17.63 6.43C15.55 6.21 13.53 7.68 12.47 7.68C11.39 7.68 9.76 6.45 8.01 6.49C5.77 6.53 3.67 7.79 2.52 9.76C0.15 13.86 1.91 19.89 3.68 23.21C4.57 24.84 5.61 26.66 7.34 26.59C9.02 26.52 9.66 25.51 11.69 25.51C13.7 25.51 14.3 26.59 16.06 26.55C17.87 26.52 18.73 24.9 19.59 23.26C20.62 21.4 21.04 19.6 21.06 19.51C21.02 19.5 19.68 18.99 19.65 14.27Z"
              fill="white"
            />
            <path
              d="M16.28 4.23C17.21 3.07 17.84 1.49 17.67 0C16.31 0.06 14.61 0.94 13.64 2.08C12.78 3.08 12.02 4.72 12.21 6.26C13.74 6.38 15.32 5.48 16.28 4.23Z"
              fill="white"
            />
          </svg>

          <div className="leading-none">
            <p className="text-[9px] uppercase tracking-wide text-white/70">
              Download on the
            </p>
            <p className="mt-1 text-[17px] font-medium tracking-tight">
              App Store
            </p>
          </div>
        </div>
      </a>

      {/* Google Play */}
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="group"
      >
        <div className="flex h-[52px] min-w-[165px] items-center gap-3 rounded-md bg-[#1f2a33] px-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#446040]">
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.2 0.8C0.45 1.6 0 2.82 0 4.4V20.6C0 22.18 0.45 23.4 1.2 24.2L1.38 24.38L12.1 12.3V12.7L1.38 0.62L1.2 0.8Z"
              fill="#4CAF50"
            />
            <path
              d="M15.65 15.85L12.1 12.3V12.7L15.65 16.25L15.78 16.18L19.98 13.8L15.65 15.85Z"
              fill="#FFC107"
            />
            <path
              d="M1.2 24.2C1.95 25 3.15 25.1 4.48 24.35L15.78 17.97L12.1 12.7L1.2 24.2Z"
              fill="#F44336"
            />
            <path
              d="M4.48 0.65C3.15 -0.1 1.95 0 1.2 0.8L12.1 12.3L15.78 7.03L4.48 0.65Z"
              fill="#2196F3"
            />
          </svg>

          <div className="leading-none">
            <p className="text-[9px] uppercase tracking-wide text-white/70">
              Get it on
            </p>
            <p className="mt-1 text-[17px] font-medium tracking-tight">
              Google Play
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
