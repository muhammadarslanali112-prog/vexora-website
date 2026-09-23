const services = [
  {
    number: "01",
    title: "Music Marketing",
    description: "Strategic promotion to grow your reach and get your sound in front of the right ears.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Spotify Marketing",
    description: "Playlist placements and streaming growth strategies built for artists.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" />
        <path d="M7.5 10c3-1 6.5-1 9 .5M7.5 13c2.5-.8 5.5-.6 7.7.7M8 16c2-.6 4-.5 5.5.4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Cover Arts",
    description: "Bold, striking cover art designs that make your track impossible to scroll past.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-5-5-9 9" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Posters",
    description: "Custom posters for drops, tours, and merch that carry your visual identity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "AI Visuals",
    description: "Cutting-edge AI-generated visuals tailored to your sound and brand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "AI Generated Videos",
    description: "Fully AI-generated video content designed to promote your music and brand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="5" width="15" height="14" rx="2" />
        <path d="M22 8l-5 4 5 4V8z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Lyrical Videos",
    description: "Engaging lyric videos that keep fans watching and sharing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M4 6h16M4 12h10M4 18h13" />
        <circle cx="19" cy="18" r="2" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Social Media Content",
    description: "Scroll-stopping content designed for Instagram, TikTok, and beyond to grow your fanbase.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="fade-in py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-vexora-red uppercase tracking-[0.3em] text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden bg-vexora-gray border border-white/10 rounded-lg p-8
                         transition-all duration-300 ease-out
                         hover:border-vexora-red hover:-translate-y-2
                         hover:shadow-[0_15px_45px_-10px_rgba(227,30,36,0.45)]"
            >
              {/* White glow overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content wrapper (above overlay) */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-vexora-red group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="font-heading text-3xl font-bold text-white/10 group-hover:text-vexora-red/40 transition-colors duration-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold uppercase mb-3 text-white">
                  {service.title}
                </h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-vexora-red group-hover:w-full transition-all duration-500 z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}