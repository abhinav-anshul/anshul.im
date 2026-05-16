import Heading from "./ui/Heading";

function Today() {
    return (
        <section className="space-y-4">
            <Heading text="Today" />
            <div className="text-sm text-gray-600 dark:text-neutral-400">
               <div className="leading-relaxed">I&apos;m working as a Senior Software Engineer at POP currently, shipping a number of products & services that powers the POP App on the Play/Android store. I worked on Dashboards, Agentic AI Chatbot and all the cool web stuff!</div>
            </div>
        </section>
    )
}

export default Today;