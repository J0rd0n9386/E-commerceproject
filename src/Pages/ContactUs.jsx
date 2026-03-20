import React from 'react'

const ContactUs = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-16">
        <p className="text-amber-400 tracking-[0.3em] text-sm mb-3">GET IN TOUCH</p>
        <h2 className="font-serif text-5xl font-bold tracking-widest mb-4">CONTACT</h2>
        <div className="w-16 h-[0.5px] bg-amber-400 mx-auto" />
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-10">
          <div className="border-l-2 border-amber-400 pl-5">
            <p className="text-amber-400 text-xs tracking-[0.3em] mb-2">PHONE</p>
            <a href="tel:6299443754" className="text-white text-xl tracking-wider hover:text-amber-400 transition-colors">
              +91 6299443754
            </a>
          </div>
          <div className="border-l-2 border-amber-400 pl-5">
            <p className="text-amber-400 text-xs tracking-[0.3em] mb-2">EMAIL</p>
            <a href="mailto:rajeevsingh123@gmail.com" className="text-white text-xl tracking-wider hover:text-amber-400 transition-colors">
              rajeevsingh123@gmail.com
            </a>
          </div>
          <div className="border-l-2 border-amber-400 pl-5">
            <p className="text-amber-400 text-xs tracking-[0.3em] mb-2">HOURS</p>
            <p className="text-gray-400 text-sm leading-relaxed">Mon – Sat: 10am – 7pm</p>
            <p className="text-gray-400 text-sm">Sunday: Closed</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-gray-700 rounded-lg px-5 py-3 text-white text-sm tracking-wide placeholder-gray-600 focus:outline-none focus:border-amber-400 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-gray-700 rounded-lg px-5 py-3 text-white text-sm tracking-wide placeholder-gray-600 focus:outline-none focus:border-amber-400 transition-colors"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="bg-transparent border border-gray-700 rounded-lg px-5 py-3 text-white text-sm tracking-wide placeholder-gray-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
          />
          <button className="bg-amber-400 text-black font-semibold tracking-[0.2em] py-3 rounded-lg hover:bg-amber-300 transition-colors">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs