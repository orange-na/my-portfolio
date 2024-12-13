import { FaSchool } from "react-icons/fa";

export function Education() {
  return (
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
              <h3 className="text-xl font-bold mb-2">{education.school}</h3>
              <p className="text-gray-600 mb-2">{education.degree}</p>
              <p className="text-gray-500 text-sm">{education.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    degree: "電気・電子システム工学科",
    duration: "2017年4月 - 2022年3月",
  },
];
