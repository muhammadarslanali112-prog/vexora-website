export default function Contact() {
  return (
    <section id="contact" className="fade-in py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-vexora-red uppercase tracking-[0.3em] text-sm mb-3">
          Get In Touch
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6">
          Let&apos;s Build Your Visual Identity
        </h2>
        <p className="font-body text-gray-400 text-base leading-relaxed mb-10">
          Ready to give your sound a face? Reach out and let&apos;s create
          something that gets you noticed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com/vexoravisual1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-vexora-red text-white px-8 py-3 uppercase font-semibold tracking-wide hover:bg-red-700 transition-colors"
          >
            DM on Instagram
          </a>
          <a
            href="mailto:contact@vexoravisual.com"
            className="border border-white/30 text-white px-8 py-3 uppercase font-semibold tracking-wide hover:border-vexora-red hover:text-vexora-red transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}