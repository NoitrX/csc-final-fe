export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between font-ubuntu font-semibold text-base py-5 px-10 border-b border-black uppercase">
            <p>Logo</p>
            <div className="hidden md:flex items-center gap-10">
                <p>Home</p>
                <p>About</p>
                <p>Division</p>
                <p>Event</p>
                <p>Faq</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}