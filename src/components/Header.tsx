import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-blue-300 py-3 px-6 flex justify-between">
            <div className="text-xl">
                <Link href="/">
                    Ghumtrip
                </Link>
            </div>
            <div>
                <Link href="/about">
                    About
                </Link>
            </div>
        </header>
    )
}