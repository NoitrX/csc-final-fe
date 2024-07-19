import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function FAQQuestion({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState<boolean | null>(null);

    return (
        <div className="w-full flex flex-col text-white">
            <div className="w-full bg-[#0B101C] rounded-md py-2 pl-14 pr-5 flex justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <p className="font-poppins font-bold">{question}</p>
                <div className="bg-gradient-to-br from-[#01124F] to-white px-2 py-2 rounded-md">
                    <FaChevronDown className={isOpen === null ? "" : isOpen ? "animate-faq-chevron-rotate" : "animate-faq-chevron-unrotate"}/>
                </div>
            </div>
            <div className={`w-full px-10 max-h-0 py-0 overflow-hidden ${isOpen === null ? "" : isOpen ? "animate-faq-appear" : "animate-faq-disappear"} text-[#B8B8B8]`}>
                {answer}
            </div>
        </div>
    )
}
