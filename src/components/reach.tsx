'use client';

import Heading from "./ui/Heading";
import { Copy } from 'lucide-react';
import { useState } from 'react';

function Reach() {
    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    const copyToClipboard = async (text: string, itemName: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(itemName);
            setTimeout(() => setCopiedItem(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (
        <section className="space-y-4">
            <Heading text="Connect" />
            <div>
                <div className="space-y-3 md:space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-0 md:gap-4 md:items-center">
                        <div className="text-gray-800">LinkedIn</div>
                        <div className="flex items-center gap-2">
                            <a href="https://linkedin.com/in/abhinav-anshul" target="_blank" className="text-sm text-gray-600 underline tracking-wide underline-offset-2">
                                https://linkedin.com/in/abhinav-anshul
                            </a>
                            <Copy 
                                className="text-gray-600 translate-y-[1px] cursor-pointer hover:text-gray-800 transition-colors" 
                                size={14} 
                                onClick={() => copyToClipboard("https://linkedin.com/in/abhinav-anshul", "linkedin")}
                            />
                            {copiedItem === "linkedin" && (
                                <span className="text-xs text-gray-600 ml-1">Copied!</span>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-0 md:gap-4 md:items-center">
                        <div className="text-gray-800">GitHub</div>
                        <div className="flex items-center gap-2">
                            <a href="https://github.com/abhinav-anshul" target="_blank" className="text-sm text-gray-600 underline tracking-wide underline-offset-2">
                                https://github.com/abhinav-anshul
                            </a>
                            <Copy 
                                className="text-gray-600 translate-y-[1px] cursor-pointer hover:text-gray-800 transition-colors" 
                                size={14} 
                                onClick={() => copyToClipboard("https://github.com/abhinav-anshul", "github")}
                            />
                            {copiedItem === "github" && (
                                <span className="text-xs text-gray-600 ml-1">Copied!</span>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-0 md:gap-4 md:items-center">
                        <div className="text-gray-800">Mail</div>
                        <div className="flex items-center gap-2">
                            <div className="text-sm text-gray-600 tracking-wide">
                                contact.abhinavanshul@gmail.com
                            </div>
                            <Copy 
                                className="text-gray-600 translate-y-[1px] cursor-pointer hover:text-gray-800 transition-colors" 
                                size={14} 
                                onClick={() => copyToClipboard("contact.abhinavanshul@gmail.com", "email")}
                            />
                            {copiedItem === "email" && (
                                <span className="text-xs text-gray-600 ml-1">Copied!</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reach;