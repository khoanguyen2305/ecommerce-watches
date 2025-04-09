import Link from "next/link";

export default function Navbar () {
    return (
        <nav>
            <div>
                <Link href="/">Watches</Link>
                <div>
                    <div>
                        {/* Search Icon */}
                    </div>
                    
                    <Input type="text"/>
                </div>
            </div>
        </nav>
    )
}