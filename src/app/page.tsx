import Image from 'next/image';

interface LinkItem {
  title: string;
  subtitle?: string;
  url: string;
  icon: React.ReactNode;
}

const links: LinkItem[] = [

  {
    title: "Discord Community",
    subtitle: "Join our active trading & gaming hub",
    url: "https://discord.gg/bsEf97raq3",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    title: "Valorant & Game Accounts",
    subtitle: "Check current stock & active offers",
    url: "https://discord.com/channels/1474138515351535791/1544011725773217813",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-8 4-8-4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "GitHub Portfolio",
    subtitle: "Project Dumping site",
    url: "https://github.com/ReXiSeXi",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start py-16 px-4 selection:bg-neutral-800">
      <div className="w-full max-w-md mx-auto flex flex-col items-center space-y-6">
        
        {/* Profile Avatar */}
        <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-neutral-700 to-neutral-500 shadow-xl">
          <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
            <span className="text-2xl font-black tracking-wider text-white">RA</span>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center justify-center gap-1.5">
            RE ARENA
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </h1>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            Digital storefront, gaming services, and BCA web development portfolio.
          </p>
        </div>

        {/* Link Buttons Container */}
        <div className="w-full space-y-3 pt-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-2 rounded-lg bg-neutral-800/60 group-hover:bg-neutral-800 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    {link.title}
                  </h2>
                  {link.subtitle && (
                    <p className="text-xs text-neutral-400 font-normal mt-0.5">
                      {link.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <svg
                className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-8 text-xs text-neutral-600 font-mono">
          Powered by Next.js & Tailwind CSS
        </footer>

      </div>
    </main>
  );
}