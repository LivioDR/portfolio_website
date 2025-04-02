import React from "react";
import '@/app/globals.css'
import { cn } from "@/lib/utils";

const anchorStyles = "text-center my-4 mx-0 text-xs text-gray-400"

const Footer = () => {
    return(
        <footer className="mt-12 py-8 flex flex-col justify-around bg-main">
            <p className="light-font text-center mx-auto my-4">
                &copy; 2024 Livio Reinoso. All rights reserved.
            </p>
            <div className="flex flex-row justify-around">
                <a
                className={cn("md:block hidden", anchorStyles)}
                href="https://www.freepik.com/free-vector/antigravity-technology-with-elements_4082399.htm#fromView=keyword&page=1&position=10&uuid=3d48b832-96d2-43bf-80ad-1be32d095911">
                    Laptop image by freepik
                </a>
                <a
                className={cn(anchorStyles)}
                href="https://svgl.app/">
                    Badge icons by svgl
                </a>
            </div>
        </footer>
    )
}
export default Footer