const testimonials = [
  {
    quote: "Vexora gave my track a visual identity I never expected. The cover art alone got people talking.",
    name: "Independent Artist",
  },
  {
    quote: "The AI visuals they created matched the energy of my sound perfectly. Fast turnaround too.",
    name: "Recording Artist",
  },
  {
    quote: "From posters to lyric videos, everything felt custom-built for my brand. Highly recommend.",
    name: "Hip-Hop Artist",
  },
];

export default function Testimonials() {
  return (
    <section className="fade-in py-24 px-6 bg-vexora-gray/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-vexora-red uppercase tracking-[0.3em] text-sm mb-3">
            What Artists Say
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-vexora-black border border-white/10 p-8 relative"
            >
              <span className="font-heading text-5xl text-vexora-red block mb-4 leading-none">
                &quot;
              </span>
              <p className="font-body text-gray-300 text-sm leading-relaxed mb-6">
                {item.quote}
              </p>
              <p className="font-body text-vexora-red text-sm uppercase tracking-wide">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}