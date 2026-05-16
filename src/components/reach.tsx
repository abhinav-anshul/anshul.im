import Heading from "./ui/Heading";
import CopyButton from "./copy-button";

function Reach() {
    return (
        <section className="space-y-4">
            <Heading text="Connect" />
            <div>
                <div className="space-y-3 md:space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-0 md:gap-4 md:items-center">
                        <div className="text-gray-800 dark:text-neutral-200">LinkedIn</div>
                        <div className="flex items-center gap-2">
                            <a href="https://linkedin.com/in/abhinavanshul" target="_blank" className="text-sm text-gray-600 dark:text-neutral-400 underline tracking-wide underline-offset-2">
                                https://linkedin.com/in/abhinavanshul
                            </a>
                            <CopyButton text="https://linkedin.com/in/abhinavanshul" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-0 md:gap-4 md:items-center">
                        <div className="text-gray-800 dark:text-neutral-200">GitHub</div>
                        <div className="flex items-center gap-2">
                            <a href="https://github.com/abhinav-anshul" target="_blank" className="text-sm text-gray-600 dark:text-neutral-400 underline tracking-wide underline-offset-2">
                                https://github.com/abhinav-anshul
                            </a>
                            <CopyButton text="https://github.com/abhinav-anshul" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-0 md:gap-4 md:items-center">
                        <div className="text-gray-800 dark:text-neutral-200">Mail</div>
                        <div className="flex items-center gap-2">
                            <div className="text-sm text-gray-600 dark:text-neutral-400 tracking-wide">
                                contact.abhinavanshul@gmail.com
                            </div>
                            <CopyButton text="contact.abhinavanshul@gmail.com" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reach;
