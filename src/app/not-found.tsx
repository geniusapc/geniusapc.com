"use client";
import TopBorder from "@/component/Border/TopBorder";
import React from "react";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen w-full -mt-24  relative ">
            <div className="bg-gray200 w-[350px] md:w-[550px] h-[200px] -rotate-12 shadow-2xl">
                <TopBorder />
                <div className="p-4  w-full">
                    <div className="text-3xl mb-8">{": ("}</div>
                    <div className="container">
                        <h1 className="error-code">404</h1>
                        <p>Oops! The page you&apos;re looking for could not be found.</p>
                        <p>
                            Return to the <a href="your-portfolio-link">homepage</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
