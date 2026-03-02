import { JSX } from "react/jsx-dev-runtime"
import { Moon } from "@boxicons/react"




export function Navbar() {
    
    interface navbarList  {
        Home: string,
        Menu: string,
        reservations: string,
        Contact: string,
        about: string,
        moon: JSX.Element,
    }

    const navbarList: navbarList = {
        Home: "Home",
        Menu: "Menu",
        reservations: "Reservations",
        Contact: "Contact",
        about: "About",
        moon: <Moon />,
    }
    return (    
        <nav className="bg-secondary p-5 flex items-center justify-between w-full lg:pl-20 lg:pr-20 sm:pl-5 sm:pr-5 shadow-shadow">
            <h1 className="text-3xl sm:text-2xl md:text-3xl font-poppins text-background ">DANLicious</h1>
            <ul className="flex items-center gap-10">
                {Object.entries(navbarList).map(([key, value]) => (
                    <li key={key} className="text-background sm:text-sm md:text-base lg:text-lg font-poppins hover:text-primary transition-colors cursor-pointer">{value}</li>
                ))}
            </ul>
        </nav>
    )
}