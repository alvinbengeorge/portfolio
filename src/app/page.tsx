import Education from "@/components/education";
import Front from "../components/front";
import { TracingBeam } from "../components/ui/tracing_beam";

export default function Home() {
  return (
    <main>
      <TracingBeam>
        <section className="grid place-items-center ">
          <Front />
        </section>
        <section className="grid place-items-center ">
          <Education />
        </section>
        
      </TracingBeam>
    </main>
  );
}
