import React from 'react'

function AboutUs() {
 
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-16">
        <p className="text-amber-400 tracking-[0.3em] text-sm mb-3">OUR STORY</p>
        <h2 className="font-serif text-5xl font-bold tracking-widest mb-4">VÉRA</h2>
        <div className="w-16 h-[0.5px] bg-amber-400 mx-auto mb-6" />
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed tracking-wide">
          Born in Paris, worn by the world. VÉRA is a unisex fashion label built
          on the belief that style has no gender. From everyday essentials to
          statement pieces — we craft clothing that speaks for itself.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 mb-20">
        {[
          { num: "500+", label: "Happy Customers" },
          { num: "120+", label: "Unique Styles" },
          { num: "15+", label: "Cities Delivered" },
          { num: "2024", label: "Est. Paris" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl font-bold text-amber-400 tracking-wider">{stat.num}</p>
            <p className="text-gray-400 text-sm tracking-[0.2em] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 tracking-[0.3em] text-xs mb-6">WHAT WE STAND FOR</p>
          {[
            { title: "Gender Free Fashion", desc: "Every piece is designed for every body. No labels, no limits." },
            { title: "Quality First", desc: "Premium fabrics, careful stitching — built to last beyond trends." },
            { title: "Honest Pricing", desc: "Luxury feel without the luxury markup. Fashion for everyone." },
          ].map((val, i) => (
            <div key={i} className="mb-8 border-l-2 border-amber-400 pl-5">
              <h4 className="text-white font-semibold tracking-wider mb-1">{val.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center border border-gray-800 rounded-xl p-10">
          <p className="text-gray-500 text-xs tracking-[0.3em] mb-6">OUR PHILOSOPHY</p>
          <p className="text-white font-serif text-2xl italic leading-relaxed mb-6">
            "Fashion is not about fitting in — it's about standing out, together."
          </p>
          <div className="w-10 h-[0.5px] bg-amber-400 mx-auto mb-4" />
          <p className="text-amber-400 text-xs tracking-[0.25em]">— VÉRA, PARIS 2024</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs