import React from 'react';
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <div className=" max-w-7xl mx-auto hero bg-base-200 rounded-3xl my-12 py-16 px-8 lg:px-24">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                <div>
                    <img src={bannerImage.src} className="max-w-xs rounded-lg shadow-2xl"
                    alt="Book Cover"/>
                </div>
                <div className="space-y-6 max-w-xl">
                    <h1 className="text-5xl lg:text-6xl font-bold font-serif leading-tight text-black">
                        Books to freshen up your bookshelf
                    </h1>
                    <button className="btn bg-[#23cb01] hover:bg-[#1fb301] text-white border-none px-7 py-3 text-lg rounded-xl font-medium shadow-none">
                        View The List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;