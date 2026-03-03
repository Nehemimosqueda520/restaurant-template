"use client";

import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { Home } from "@/components/ui/home";
import { useState } from "react";

export default function Landing() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
    </main>
  )

}
