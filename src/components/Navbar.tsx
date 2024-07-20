import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between font-ubuntu font-semibold text-base py-5 px-10 border-b border-black uppercase">
            <p>Logo</p>
            <div className="hidden md:flex items-center gap-3 lg:gap-10">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <p>Division</p>
                <p>Event</p>
                <Link href="/faq">FAQ</Link>
                <p>Contact</p>
                <button className="bg-primary text-white py-2 px-10 flex items-center gap-3">
                    <FiPhone />
                    <p>Join Us</p>
                </button>
            </div>
        </nav>
    )
}