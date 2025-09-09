import Heading from "./ui/Heading";

function Experiences() {
    return (
        <section className="space-y-4">
            <Heading text="Experiences" />
            <div className="space-y-3">
                <div>
                    <div className=" text-gray-800">SquareBoat</div>
                    <div className="text-sm text-gray-600">I worked as a Frontend Engineer at SquareBoat for 2 years, closely worked with the design team and iterated Web projects for clients including fortune 500 companies</div>
                </div>
                <div>
                    <div className="text-gray-800">Consense Labs</div>
                    <div className="text-sm text-gray-600 ">Worked as a Founding Frontend Engineer at a startup focused on solving ethereum based transactions on-chain. I had a chance to build in-house Design System and introduce it to wide team across.</div>
                </div>
                <div>
                    <div className=" text-gray-800">Accenture</div>
                    <div className="text-sm text-gray-600">First full time job, worked as a software engineer designed and developed a Travel Portal for a client alongwith a team of 5</div>
                </div>

            </div>
        </section>
    )
}

export default Experiences;