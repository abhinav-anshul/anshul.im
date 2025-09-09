import Heading from "./ui/Heading";

function Today() {
    return (
        <section className="space-y-4">
            <Heading text="Today" />
            <div className="text-gray-600">
               <div className="leading-relaxed">I work at POP as a Senior Frontend Engineer. I am responsible for building end to end web initiatives. I mostly work with JavaScript, React, Next.js, Tailwind CSS and all things web.</div>
            </div>
        </section>
    )
}

export default Today;