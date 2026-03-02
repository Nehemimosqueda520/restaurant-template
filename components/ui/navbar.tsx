"use client";

import { JSX } from "react/jsx-dev-runtime"
import { Moon } from "@boxicons/react"
import { Sun } from "lucide-react";
import { useState } from "react";




export function Navbar() {
    interface navbarList  {
        Home: string,
        Menu: string,
        reservations: string,
        Contact: string,
        about: string,
    }

    /* moon has to a JSX element that when pressed toggles the dark mode of the website. */ 

    const navbarList: navbarList = {
        Home: "Home",
        Menu: "Menu",
        reservations: "Reservations",
        Contact: "Contact",
        about: "About",
   }

   
   const [darkMode, setDarkMode] = useState(false);

   

 
    return (    
        <nav id="navbar" className="bg-secondary p-5 flex items-center justify-between w-full sm:w-full lg:pl-20 lg:pr-20 shadow-lg/10">
            <h1 className="text-3xl sm:text-2xl md:text-3xl font-poppins text-text ">DANLicious</h1>
            <ul className="flex items-center gap-10">
                {Object.entries(navbarList).map(([key, value]) => (
                    <li key={key}  className="text-text  sm:text-sm md:text-base lg:text-lg font-poppins hover:text-primary transition-colors cursor-pointer">{value}</li>
                ))}
                <div onClick={ () => {
                    document.documentElement.classList.toggle("dark");
                    setDarkMode(!darkMode);
                }}>  {document.documentElement.classList.contains("dark") ? <Sun className="text-text hover:text-primary" /> : <Moon className="text-text hover:text-primary" />}
                </div>
            </ul>
            
        </nav>
    )
}