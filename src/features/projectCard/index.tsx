import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

type Props = {
  project: Project;
};

export default async function ProjectCard(props: Props) {
  return (
    <div>
      <div className="relative group overflow-hidden shadow-xl w-full text-gray-800 rounded-lg">
        <Image
          width={1920}
          height={1080}
          src={props.project.imgSrc}
          alt={props.project.title}
          className="object-cover h-full w-full"
        />
        <div className="flex items-center justify-center absolute w-full h-full top-0 -left-[100%] group-hover:bg-[#c0c0c064] group-hover:left-0 duration-300">
          <div className="bg-white opacity-[88%] w-[80%] h-[80%] flex items-center justify-center flex-col gap-3 sm:gap-7 rounded-lg">
            <p className="text-[16px] sm:text-[20px] font-extrabold">
              {props.project.title}
            </p>
            <div className="flex gap-3 text-[13px] sm:text-[16px] sm:gap-5 font-bold">
              {props.project.technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <div className="flex items-center justify-center gap-5">
              <Link
                href={props.project.codeLink}
                className="flex items-center justify-center gap-2"
              >
                <FaGithub
                  fontSize={20}
                  className="ml-1 text-gray-800 hover:text-gray-600 duration-300 z-30"
                />
                <div className="hover:text-gray-600 duration-300">Code</div>
              </Link>
              {props.project.demoLink && (
                <Link
                  href={props.project.demoLink}
                  className="flex items-center justify-center gap-2"
                >
                  <MdOpenInNew
                    fontSize={20}
                    className="ml-1 text-gray-800 hover:text-gray-600 duration-300 z-30"
                  />
                  <div className="hover:text-gray-600 duration-300">Demo</div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 sm:p-4 sm:gap-2">
        <h2 className="font-bold sm:text-2xl">{props.project.title}</h2>
        <p className="sm:text-lg">{props.project.technologies.join(", ")}</p>
      </div>
    </div>
  );
}
