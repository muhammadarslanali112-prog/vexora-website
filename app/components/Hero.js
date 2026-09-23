export default function Hero() {
  return (
    <section
      id="home"
      className=" fade-in min-h-screen flex flex-col items-center justify-center text-center px-6 pt-10"
    >
      {/* <hr className="border-white/100 w-full mb-6 mx-" /> */}
      <p className="font-body text-vexora-red uppercase tracking-[0.3em] text-sm mb-4">
        Hip-Hop Visual Studio
      </p>

      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase leading-tight max-w-4xl">
        Your Sound Deserves a{" "}
        <span className="text-vexora-red">Visual Identity</span>
      </h1>

      <p className="font-body text-gray-400 mt-6 max-w-xl text-base md:text-lg">
        Sound needs a face — we design it. Cover art, posters, AI visuals,
        and more. Built for the culture.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a
          href="#contact"
          className="bg-vexora-red text-white px-8 py-3 uppercase font-semibold tracking-wide hover:bg-red-700 transition-colors"
        >
          Get Started
        </a>
        <a   
          href="#services"
          className="border border-white/30 text-white px-8 py-3 uppercase font-semibold tracking-wide hover:border-vexora-red hover:text-vexora-red transition-colors"
        >
          Our Services
        </a>
      </div>
      <hr className="border-white/100 w-full mt-12 mx-auto" />
    </section>
  );
}