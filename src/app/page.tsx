import Education from "@/components/education";
import Front from "@/components/front";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Front />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
