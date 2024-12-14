import {
  Education,
  Experience,
  Profile,
  Project,
  Skill,
} from "@/app/_components";

export default async function Home() {
  return (
    <main>
      <Profile />
      <div className="px-10 md:px-32 mx-auto bg-[var(--background)] relative z-10">
        <section className="education-timeline-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Education />
          <Experience />
        </section>
        <Project />
        <Skill />
      </div>
    </main>
  );
}
