import Header from "@/components/header";
import Experiences from "@/components/experiences";
import Today from "@/components/today";
import Reach from "@/components/reach";

export default function Home() {
  return (
    <>
      <section className="space-y-8">
        <Header />
        <Today />
        <Experiences />
        <Reach />
      </section>
    </>
  )
}
