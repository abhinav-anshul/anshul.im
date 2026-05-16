import Heading from "./ui/Heading";

function Experiences() {
    return (
        <section className="space-y-4">
            <Heading text="Past Experiences" />
            <div className="space-y-3">
                {/* <div>
                    <div className=" text-gray-800 dark:text-neutral-200">POP by Razorpay</div>
                    <div className="text-sm text-gray-600 dark:text-neutral-400">I&apos;m working as a Senior Software Engineer at POP currently, shipping number of services that powers the POP App on the Play/Android store. I worked on Dashboards, Agentic AI Chatbot and a number of services.</div>
                </div> */}
                <div>
                    <div className="text-sm font-medium text-gray-800 dark:text-neutral-200">SquareBoat</div>
                    <div className="text-sm text-gray-600 dark:text-neutral-400">I worked as a Frontend Engineer at SquareBoat for 2 years, closely worked with the design team and iterated Web projects for clients including fortune 500 companies</div>
                </div>
                <div>
                    <div className="text-sm font-medium text-gray-800 dark:text-neutral-200">Consense Labs</div>
                    <div className="text-sm text-gray-600 dark:text-neutral-400 ">Worked as a Founding Frontend Engineer at a startup focused on solving ethereum based transactions on-chain. I had a chance to build in-house Design System and introduce it to wide team across.</div>
                </div>
                <div>
                    <div className="text-sm font-medium text-gray-800 dark:text-neutral-200">Accenture</div>
                    <div className="text-sm text-gray-600 dark:text-neutral-400">First full time job, worked as a software engineer designed and developed a Travel Portal for a client alongwith a team of 5</div>
                </div>

            </div>
        </section>
    )
}

export default Experiences;