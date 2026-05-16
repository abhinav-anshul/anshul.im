import { ExternalLink } from 'lucide-react'; function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="avatar-shimmer rounded-full w-14 h-14"></div>
                    <div className='leading-none'>
                        <h1 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">Abhinav Anshul</h1>
                        <div className='text-gray-700 dark:text-neutral-400 text-sm font-medium -mt-1'>Product Engineer</div>
                    </div>
                </div>
                <div>
                    <a href="/Abhinav-Anshul-Resume.pdf" target="_blank">
                        <div className="flex items-center space-x-1 text-gray-700 dark:text-neutral-300">
                            <div className='text-xs'>
                                Resume
                            </div>
                            <div className='-translate-y-0.5'>
                                <ExternalLink strokeWidth={1.5} size={16} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <hr className='my-2 border-gray-300 dark:border-neutral-800' />
        </header>
    )
}

export default Header;