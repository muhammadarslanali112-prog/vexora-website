// const services = [
//   {
//     title: "Music Marketing",
//     description: "Strategic promotion to grow your reach and get your sound in front of the right ears.",
//   },
//   {
//     title: "Spotify Marketing",
//     description: "Playlist placements and streaming growth strategies built for artists.",
//   },
//   {
//     title: "Cover Arts",
//     description: "Bold, striking cover art designs that make your track impossible to scroll past.",
//   },
//   {
//     title: "Posters",
//     description: "Custom posters for drops, tours, and merch that carry your visual identity.",
//   },
//   {
//     title: "AI Visuals",
//     description: "Cutting-edge AI-generated visuals tailored to your sound and brand.",
//   },
//   {
//     title: "Lyrical Videos",
//     description: "Engaging lyric videos that keep fans watching and sharing.",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="font-body text-vexora-red uppercase tracking-[0.3em] text-sm mb-3">
//             What We Do
//           </p>
//           <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase">
//             Our Services
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="bg-vexora-gray border border-white/10 p-8 hover:border-vexora-red transition-colors"
//             >
//               <h3 className="font-heading text-xl font-semibold uppercase mb-3 text-white">
//                 {service.title}
//               </h3>
//               <p className="font-body text-gray-400 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const services = [
  {
    title: "Music Marketing",
    description: "Strategic promotion to grow your reach and get your sound in front of the right ears.",
  },
  {
    title: "Spotify Marketing",
    description: "Playlist placements and streaming growth strategies built for artists.",
  },
  {
    title: "Cover Arts",
    description: "Bold, striking cover art designs that make your track impossible to scroll past.",
  },
  {
    title: "Posters",
    description: "Custom posters for drops, tours, and merch that carry your visual identity.",
  },
  {
    title: "AI Visuals",
    description: "Cutting-edge AI-generated visuals tailored to your sound and brand.",
  },
  {
    title: "AI Generated Videos",
    description: "Fully AI-generated video content designed to promote your music and brand.",
  },
  {
    title: "Lyrical Videos",
    description: "Engaging lyric videos that keep fans watching and sharing.",
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
              className="bg-vexora-gray border border-white/10 p-8 hover:border-vexora-red transition-colors"
            >
              <h3 className="font-heading text-xl font-semibold uppercase mb-3 text-white">
                {service.title}
              </h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}