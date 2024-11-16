import { projects } from "@/constants";
import ProjectCard from "@/features/projectCard";
import TopTitle from "@/features/topTitle";

export default function Home() {
  return (
    <main className="container sm:px-16 m-auto">
      <TopTitle />

      <div className="pb-20 js-show-on-scroll">
        <div className="container pt-40 mx-auto grid sm:grid-cols-2 gap-x-10 gap-y-[120px] px-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="fixed w-screen h-screen top-0 left-0 -z-20">
        <div className="bg-gray-400 blur-3xl w-80 h-80 rounded-full absolute -z-10 animate-pulse" />
        <div className="bg-gray-400 blur-3xl w-60 h-60 rounded-full absolute top-[450px] left-[1100px] -z-10 animate-pulse" />
        <div className="bg-gray-400 blur-3xl w-40 h-40 rounded-full absolute top-[300px] left-[400px] -z-10 animate-pulse" />
        <div className="bg-gray-400 blur-2xl w-24 h-24 rounded-full absolute top-[700px] left-[600px] -z-10 animate-pulse3" />
        <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[100px] left-[1500px] -z-10 animate-pulse2" />
        <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[500px] left-[0px] -z-10 animate-pulse" />
        <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[900px] left-[200px] -z-10 animate-pulse3" />
        <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[150px] left-[800px] -z-10 animate-pulse2" />
        <div className="bg-gray-400 blur-3xl w-24 h-24 rounded-full absolute top-[50px] left-[1300px] -z-10 animate-pulse3" />
      </div>
    </main>
  );
}
