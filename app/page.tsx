"use client";

import dynamic from "next/dynamic";

const FloatingNav = dynamic(() => import("@/components/ui/FloatingNav"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const WorkProjects = dynamic(() => import("@/components/WorkProjects"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <Grid />
        <WorkProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
