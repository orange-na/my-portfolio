import { MdCorporateFare } from "react-icons/md";

export function Experience() {
  return (
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
              <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
              <p className="text-gray-600 mb-2">{experience.description}</p>
              <p className="text-gray-500 text-sm">{experience.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
