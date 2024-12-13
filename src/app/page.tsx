"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaTwitter,
  FaPython,
  FaDocker,
  FaAws,
  FaGoogle,
  FaSchool,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { MdCorporateFare } from "react-icons/md";
import { SiJavascript, SiTerraform, SiTypescript } from "react-icons/si";

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

const educations = [
  {
    id: 1,
    school: "津山工業高等専門学校",
    degree: "電子・情報システム工学専攻",
    duration: "2022年4月 - 2026年3月(予定)",
  },
  {
    id: 2,
    school: "Cornerstone International Community College of Canada",
    degree: "Web & Mobile Development",
    duration: "2023年5月 - 2025年5月",
  },
  {
    id: 3,
    school: "津山工業高等専門学校",
    degree: "電気情報工学科",
    duration: "2017年4月 - 2022年3月",
  },
];

const experiences = [
  {
    id: 1,
    title: "ドットミューラ株式会社 (インターン)",
    description: "ソフトウェアエンジニア",
    duration: "2023年11月 - 現在",
  },
  {
    id: 2,
    title: "freee株式会社 (インターン)",
    description: "ソフトウェアエンジニア",
    duration: "2024年9月",
  },
  {
    id: 3,
    title: "株式会社メイキップ (アルバイト)",
    description: "Webクローラーエンジニア",
    duration: "2023年11月 - 2024年1月",
  },
];

const skills = [
  { id: 1, name: "HTML", icon: FaHtml5, color: "text-red-500" },
  { id: 2, name: "CSS", icon: FaCss3, color: "text-blue-500" },
  { id: 3, name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { id: 4, name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { id: 5, name: "Go", icon: FaGolang, color: "text-blue-400" },
  { id: 6, name: "Python", icon: FaPython, color: "text-yellow-400" },
  { id: 7, name: "Docker", icon: FaDocker, color: "text-blue-600" },
  { id: 8, name: "AWS", icon: FaAws, color: "text-orange-500" },
  { id: 9, name: "GCP", icon: FaGoogle, color: "text-red-400" },
  { id: 10, name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
];

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="inset-0 bg-gradient-to-r from-blue-500 to-purple-500 py-20 w-full">
        <div className="text-white px-10 md:px-32 mx-auto flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-0 md:mr-8"
          >
            <Image
              width={192}
              height={192}
              src="/images/profile.jpg"
              alt="Yuto Namba"
              className="w-48 h-48 rounded-full object-cover border-4 border-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Yuto Namba</h1>
            <p className="text-xl mb-8">
              津山工業高等専門学校 / 電子・情報システム工学専攻
            </p>
            <p className="text-lg mb-8">
              私は、モダンなWebアプリケーションの開発に情熱を注いでいます。
              <br />
              クリーンなコードとユーザーフレンドリーなデザインを心がけています。
            </p>
            <div className="flex items-center mb-8">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-100 mr-4"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-100 mr-4"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-100"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
            <motion.a
              href="#projects"
              className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              プロジェクトを見る
            </motion.a>
          </motion.div>
        </div>
      </section>

      <div className="px-10 md:px-32 mx-auto">
        <section className="education-timeline-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="education">
            <h2 className="text-3xl font-bold mb-10">学歴</h2>
            <div className="relative">
              <div className="absolute top-0 left-1/2 w-0.5 h-full  hidden lg:block" />
              {educations.map((education) => (
                <div key={education.id} className="education-item mb-8 flex">
                  <div className="education-icon bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <FaSchool className="w-6 h-6" />
                  </div>
                  <div className="education-content ml-8">
                    <h3 className="text-xl font-bold mb-2">
                      {education.school}
                    </h3>
                    <p className="text-gray-600 mb-2">{education.degree}</p>
                    <p className="text-gray-500 text-sm">
                      {education.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline">
            <h2 className="text-3xl font-bold mb-10">実務経歴</h2>
            <div className="relative">
              <div className="absolute top-0 left-1/2 w-0.5 h-full hidden lg:block" />
              {experiences.map((experience) => (
                <div key={experience.id} className="timeline-item mb-8 flex">
                  <div className="timeline-icon bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <MdCorporateFare className="w-6 h-6" />
                  </div>
                  <div className="timeline-content ml-8">
                    <h3 className="text-xl font-bold mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {experience.description}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {experience.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section className="skills py-20">
          <h2 className="text-3xl font-bold mb-10">スキル</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-item text-center">
                <skill.icon
                  className={`h-12 w-12 mx-auto mb-4 ${skill.color}`}
                />
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
