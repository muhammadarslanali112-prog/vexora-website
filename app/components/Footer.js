export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/25 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-heading text-lg font-bold tracking-wider">
          VEXORA <span className="text-vexora-red">VISUAL</span>
        </p>

        <div className="flex gap-6">
          <a
            href="https://instagram.com/vexoravisual1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-gray-400 hover:text-vexora-red transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="font-body text-sm text-gray-400 hover:text-vexora-red transition-colors"
          >
            Facebook
          </a>
        </div>

        <p className="font-body text-sm text-gray-500">
          © {year} Vexora Visual. All rights reserved.
        </p>
      </div>
    </footer>
  );
}