'use client';

import { Copy } from 'lucide-react';
import { useState } from 'react';

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    return (
        <>
            <Copy
                className="text-gray-600 dark:text-neutral-400 translate-y-[1px] cursor-pointer hover:text-gray-800 dark:hover:text-neutral-200 transition-colors"
                size={14}
                onClick={handleCopy}
            />
            {copied && (
                <span className="text-xs text-gray-600 dark:text-neutral-400 ml-1">Copied!</span>
            )}
        </>
    );
}

export default CopyButton;
