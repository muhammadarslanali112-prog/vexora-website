const stats = [
  { number: "36+", label: "Projects Delivered" },
  { number: "300+", label: "Happy Clients" },
  { number: "7", label: "Core Services" },
  { number: "100%", label: "Original Designs" },
];

export default function About() {
  return (
    <section id="about" className="fade-in py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="font-body text-vexora-red uppercase tracking-[0.3em] text-sm mb-3">
              Why Vexora
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6">
              Sound Needs A Face
            </h2>
            <p className="font-body text-gray-400 text-base leading-relaxed mb-4">
              We are a hip-hop visual studio built for artists who want their
              music to be seen, not just heard. From cover art to AI-generated
              visuals, we turn your sound into something people remember.
            </p>
            <p className="font-body text-gray-400 text-base leading-relaxed">
              Every project we deliver is built for the culture — bold,
              original, and designed to make an impact.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-vexora-gray border border-white/10 p-6 text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-vexora-red mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}