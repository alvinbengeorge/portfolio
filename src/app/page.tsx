import Front from "../components/front";
import { TracingBeam } from "../components/ui/tracing_beam";

export default function Home() {
  return (
    <main>
      <TracingBeam>
        <section className="grid place-items-center ">
          <Front />
        </section>
        
      </TracingBeam>
    </main>
  );
}
