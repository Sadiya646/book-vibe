import React from 'react';
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 my-8">
            <div className="hero bg-gradient-to-r from-base-200 via-base-100 to-base-200 border border-base-300 shadow-xl rounded-[2.5rem] py-16 px-6 lg:px-20 overflow-hidden relative">
                
                {/* Decorative background blur element for modern look */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center w-full gap-12 relative z-10">
                    
                    {/* Image with Floating & Soft Shadow Effect */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#23cb01] to-[#50c8de] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                            <img 
                                src={bannerImage.src} 
                                className="relative w-64 md:w-72 lg:w-80 rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                                alt="Book Cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left space-y-8 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-[#23cb01] text-sm font-semibold border border-emerald-200 shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-[#23cb01] animate-pulse"></span>
                            Trending Collection 2026
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.15] text-neutral">
                            Books to freshen up your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23cb01] to-[#1bb200]">bookshelf</span>
                        </h1>

                        <p className="text-base md:text-lg text-neutral/70 font-normal leading-relaxed">
                            Discover thousands of books, find your next favorite read, and elevate your reading journey with our curated lists.
                        </p>

                        <div>
                            <button className="btn bg-[#23cb01] hover:bg-[#1fb301] text-white border-none px-8 py-3.5 text-lg rounded-2xl font-medium shadow-lg shadow-[#23cb01]/25 transition-all duration-300 hover:scale-105 active:scale-95">
                                View The List
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;