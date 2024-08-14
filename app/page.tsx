"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNav"), {
  ssr: false,
});

export default function Home() {
  const [form, setForm] = useState("");

  useEffect(() => {
    setForm("Hari");
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
