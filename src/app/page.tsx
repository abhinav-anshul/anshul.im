import Header from "@/components/header";
import Experiences from "@/components/experiences";
import Today from "@/components/today";
import Reach from "@/components/reach";
import Blog from "@/components/blog";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <section className="space-y-8">
      <Header />
      <Today />
      <Blog />
      <Experiences />
      <Reach />
      <div className="flex justify-center pt-4">
        <ThemeToggle />
      </div>
    </section>
  )
}
