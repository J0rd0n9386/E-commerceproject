import React from 'react'
import { NavLink } from 'react-router-dom'


const Hero = () => {
    return (
        <div className="bg-black">

            <section className="relative min-h-screen flex items-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/6121050-uhd_2160_4096_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                <div className="relative z-10 max-w-7xl mx-auto px-10 flex flex-col gap-6">
                    <p className="text-amber-400 tracking-[0.4em] text-xs">NEW COLLECTION · 2024</p>
                    <h1 className="font-serif text-8xl font-bold tracking-wider leading-none">
                        <span className="text-white">WEAR</span><br />
                        <span className="text-amber-400">YOUR</span><br />
                        <span className="text-white">STORY</span>
                    </h1>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed tracking-widest">
                        Unisex fashion for every body. Premium quality, honest pricing — made for the bold.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <NavLink
                            to="/Products"
                            className="bg-amber-400 text-black font-bold tracking-[0.25em] text-xs px-8 py-4 rounded-full hover:bg-amber-300 transition-all duration-300"
                        >
                            SHOP NOW
                        </NavLink>
                        <NavLink
                            to="/AboutUs"
                            className="border border-gray-600 text-white font-medium tracking-[0.2em] text-xs px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                        >
                            OUR STORY
                        </NavLink>
                    </div>
                    <div className="flex gap-10 mt-8 border-t border-gray-800 pt-8">
                        {[
                            { num: "500+", label: "Customers" },
                            { num: "120+", label: "Styles" },
                            { num: "15+", label: "Cities" },
                        ].map((s, i) => (
                            <div key={i}>
                                <p className="text-amber-400 text-2xl font-bold">{s.num}</p>
                                <p className="text-gray-600 text-xs tracking-[0.2em]">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <p className="text-gray-600 text-[10px] tracking-[0.3em]">SCROLL</p>
                    <div className="w-[0.5px] h-10 bg-amber-400 animate-pulse" />
                </div>
            </section>

            <section className="py-20 px-10 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-amber-400 tracking-[0.3em] text-xs mb-3">HAND PICKED</p>
                    <h2 className="text-white font-serif text-4xl tracking-widest">FEATURED</h2>
                    <div className="w-12 h-[0.5px] bg-amber-400 mx-auto mt-4" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {[
                        { label: "MEN", desc: "Bold. Sharp. Effortless." },
                        { label: "WOMEN", desc: "Elegant. Free. Powerful." },
                        { label: "UNISEX", desc: "No labels. Just style." },
                    ].map((cat, i) => (
                        <NavLink to="/Products" key={i}
                            className="group relative border border-gray-800 rounded-2xl overflow-hidden h-80 flex items-end p-6 hover:border-amber-400 transition-all duration-500 bg-gray-900 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            <div className="relative z-10">
                                <h3 className="text-white font-serif text-3xl tracking-widest group-hover:text-amber-400 transition-colors duration-300">
                                    {cat.label}
                                </h3>
                                <p className="text-gray-500 text-xs tracking-[0.2em] mt-1">{cat.desc}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Hero