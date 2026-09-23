import Image from "next/image";

const portfolioItems = [
  { title: "Cover Art 01", src: "/images/portfolio/cover-art-01.svg" },
  { title: "Poster Design 01", src: "/images/portfolio/poster-design-01.svg" },
  { title: "AI Visual 01", src: "/images/portfolio/ai-visual-01.svg" },
  { title: "Lyric Video 01", src: "/images/portfolio/lyric-video-01.svg" },
  { title: "Cover Art 02", src: "/images/portfolio/cover-art-02.svg" },
  { title: "Poster Design 02", src: "/images/portfolio/poster-design-02.svg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="fade-in py-24 px-6 bg-vexora-gray/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-vexora-red uppercase tracking-[0.3em] text-sm mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="relative aspect-square overflow-hidden border border-white/10 hover:border-vexora-red transition-colors cursor-pointer group"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 