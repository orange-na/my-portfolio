import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGoogle,
  FaHtml5,
  FaPython,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiJavascript, SiTerraform, SiTypescript } from "react-icons/si";

export function Skill() {
  return (
    <section className="skills py-20">
      <h2 className="text-3xl font-bold mb-10">スキル</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item text-center">
            <skill.icon className={`h-12 w-12 mx-auto mb-4 ${skill.color}`} />
            <h3 className="text-xl font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

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
