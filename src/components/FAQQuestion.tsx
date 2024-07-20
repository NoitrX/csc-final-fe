import { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function FAQQuestion({ question, answer }: { question: string; answer: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean | null>(null);

    return (
        <div className="w-full flex flex-col text-white">
            <button className="w-full bg-[#0B101C] rounded-md py-2 pl-14 pr-5 flex justify-between gap-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <p className="font-poppins font-bold">{question}</p>
                <div className="bg-gradient-to-br from-[#01124F] to-white min-w-7 max-w-7 h-7 flex justify-center items-center rounded-md">
                    <FaChevronDown className={isOpen === null ? "" : isOpen ? "animate-faq-chevron-rotate" : "animate-faq-chevron-unrotate"}/>
                </div>
            </button>
            <div className={`w-full px-10 max-h-0 py-0 overflow-hidden ${isOpen === null ? "" : isOpen ? "animate-faq-appear" : "animate-faq-disappear"} text-[#B8B8B8]`}>
                {answer}
            </div>
        </div>
    )
}
