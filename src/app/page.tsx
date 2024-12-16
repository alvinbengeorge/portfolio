import Education from "@/components/education";
import Front from "@/components/front";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Front />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
