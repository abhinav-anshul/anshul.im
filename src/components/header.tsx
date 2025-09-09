import { ExternalLink } from 'lucide-react'; function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-200 w-15 h-15"></div>
                    <div className='leading-none'>
                        <h1 className="font-semibold text-lg text-gray-800">Abhinav Anshul</h1>
                        <div className='text-gray-700 text-sm font-medium -mt-1'>Design Engineer</div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-1">
                        <div className='text-xs'>Resume</div>
                        <div className='-translate-y-0.5'> 
                            <ExternalLink strokeWidth={1.5} size={16} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-2 text-gray-300'/>
        </header>
    )
}

export default Header;