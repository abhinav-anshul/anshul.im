import Heading from "./ui/Heading";

function Experiences() {
    return (
        <section className="text-gray-600 space-y-4">
            <Heading text="Experiences" />
            <div className="space-y-3">
                <div>
                    <div className="font-semibold">SquareBoat</div>
                    <div>I worked as a Frontend Engineer at SquareBoat for 2 years, closely worked with the design team and iterated Web projects for clients including fortune 500 companies</div>
                </div>
                <div>
                    <div className="font-semibold">Consense Labs</div>
                    <div>Worked as a Founding Frontend Engineer at a startup focused on solving ethereum bases transactions on-chain. I had a chance to build in-house Design System and introduce it to wide team across.</div>
                </div>
                <div>
                    <div className="font-semibold">Accenture</div>
                    <div>First full time job, worked as a software engineer designed and developed a Travel Portal for a client alongwith a team of 5</div>
                </div>
                
            </div>
        </section>
    )
}

export default Experiences;