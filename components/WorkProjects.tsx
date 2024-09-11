"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { ProjectContainer } from "./ui/ProjectCard";

const WorkProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-44 mt-10">
          {projects.map((item) => (
            <div
              className="sm:h-[20rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={item.id}
            >
              <ProjectContainer containerClassName={"sm:w[40rem]"}>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 h-[7rem]"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex justify-center items-center">
                    {/* <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                  </div>
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </ProjectContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;
