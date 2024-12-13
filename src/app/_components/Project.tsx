"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Project() {
  return (
    <section className="projects py-20" id="projects">
      <h2 className="text-3xl font-bold mb-10">プロジェクト</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              width={300}
              height={200}
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                詳細を見る &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: "プロジェクト1",
    description: "プロジェクト1の説明",
    image: "/path/to/image1.jpg",
    link: "/project1",
  },
  {
    id: 2,
    title: "プロジェクト2",
    description: "プロジェクト2の説明",
    image: "/path/to/image2.jpg",
    link: "/project2",
  },
  {
    id: 3,
    title: "プロジェクト1",
    description: "プロジェクト1の説明",
    image: "/path/to/image1.jpg",
    link: "/project1",
  },
  {
    id: 4,
    title: "プロジェクト2",
    description: "プロジェクト2の説明",
    image: "/path/to/image2.jpg",
    link: "/project2",
  },
];
